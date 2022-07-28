// https://www.acmicpc.net/problem/11559

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `......
    ......
    ......
    ......
    ......
    ......
    ......
    ......
    ......
    ......
    RRYY..
    RRYY..`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = [12, 6];
let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input().trim().split(""));
}

const visited = new Array(N).fill(null).map((_) => new Array(M).fill(false));
const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < M;

const visitedClear = (arr) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visited[i][j] = false;
    }
  }
};

const verticalSort = () => {
  for (let i = 0; i < M; i++) {
    const temp = [];
    for (let j = 0; j < N; j++) {
      if (arr[j][i] !== ".") {
        temp.push(arr[j][i]);
        arr[j][i] = ".";
      }
    }
    for (let j = N - temp.length, count = 0; j < N; j++, count++) {
      arr[j][i] = temp[count];
    }
  }
};

const arrows = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
let result = 0;
 
const bfs = (a, b) => {
  const char = arr[a][b];
  const q = [[a, b]];
  let nowIndex = 0;
  visited[a][b] = true;
  while (q.length > nowIndex) {
    const [x, y] = q[nowIndex];
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (
        isValid(xxx, yyy) &&
        arr[xxx][yyy] === char &&
        visited[xxx][yyy] === false
      ) {
        q.push([xxx, yyy]);
        visited[xxx][yyy] = true;
      }
    }
    nowIndex++;
    if (q.length <= nowIndex && q.length >= 4) {
      for (let [x, y] of q) {
        arr[x][y] = ".";
      }
      return true;
    }
  }
  return false;
};
while (true) {
  let isChange = false;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] !== "." && visited[i][j] === false) {
        const res = bfs(i, j);
        isChange = isChange || res;
      }
    }
  }
  visitedClear();
  verticalSort();
  if (isChange === true) {
    result++;
  } else {
    break;
  }
}
console.log(result);
