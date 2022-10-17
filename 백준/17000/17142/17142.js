const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 3
    2 0 0 0 1 1 0
    0 0 1 0 1 2 0
    0 1 1 0 1 0 0
    0 1 0 0 0 0 0
    0 0 0 2 0 1 1
    0 1 0 0 0 0 0
    2 1 0 0 0 0 2
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => +v);
const arr = [];
for (let i = 0; i < N; i++)
  arr.push(
    input()
      .trim()
      .split(" ")
      .map((v) => +v)
  );

const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < N;
const arrows = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const bfs = (a, b) => {
  const visited = new Array(N)
    .fill(null)
    .map((_) => new Array(N).fill(Infinity));
  const q = [[a, b]];
  visited[a][b] = 0;
  while (q.length > 0) {
    const [x, y] = q.shift();
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (!isValid(xxx, yyy)) continue;
      if (
        (arr[xxx][yyy] === 0 || arr[xxx][yyy] === 2) &&
        visited[xxx][yyy] === Infinity
      ) {
        q.push([xxx, yyy]);
        visited[xxx][yyy] = visited[x][y] + 1;
      }
    }
  }
  return visited;
};

const checkArr = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 2) {
      const res = bfs(i, j);
      checkArr.push(res);
    }
  }
}

const checkTime = (nArr) => {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 0) {
        count = Math.max(
          count,
          Math.min(...nArr.map((e) => checkArr[e][i][j]))
        );
      }
    }
  }
  return count;
};

const dfs = (idx = -1, arr = []) => {
  const s = [];
  if (arr.length === M) {
    return [[...arr]];
  } else {
    for (let i = idx + 1; i < checkArr.length; i++) {
      arr.push(i);
      s.push(...dfs(i, arr));
      arr.pop();
    }
  }
  return s;
};
const res = Math.min(...dfs(-1).map((v) => checkTime(v)));
console.log(res === Infinity ? -1 : res);
