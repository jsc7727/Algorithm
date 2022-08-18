const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `8 9
    0 0 0 0 0 0 0 0 0
    0 0 0 1 1 0 0 0 0
    0 0 0 1 1 0 1 1 0
    0 0 1 1 1 1 1 1 0
    0 0 1 1 1 1 1 0 0
    0 0 1 1 0 1 1 0 0
    0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .split(" ")
  .map((v) => +v);
const arr = [];
arr.push(new Array(M).fill(0));
const NN = N + 1;
for (let i = 0; i < N; i++) {
  arr.push(
    input()
      .trim()
      .split(" ")
      .map((v) => +v)
  );
}

const isValid = (x, y) => 0 <= x && x < NN && 0 <= y && y < M;
const arrows = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const bfs = (a, b) => {
  const visited = new Array(NN).fill(null).map((_) => new Array(M).fill(0));
  const q = [[a, b]];
  while (q.length > 0) {
    const [x, y] = q.shift();
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (!isValid(xxx, yyy)) continue;
      if (arr[xxx][yyy] === 0 && visited[xxx][yyy] === 0) {
        q.push([xxx, yyy]);
        visited[xxx][yyy]++;
      } else if (arr[xxx][yyy] === 1) {
        visited[xxx][yyy]++;
      }
    }
  }
  //   for (let i of visited) {
  //     console.log(i.join(" "));
  //   }
  //   console.log();
  for (let i = 0; i < NN; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] >= 2) {
        arr[i][j] = 0;
      }
    }
  }
};
const checker = () => {
  for (let i = 0; i < NN; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 1) {
        return false;
      }
    }
  }
  return true;
};
let answer = 0;
while (true) {
  if (checker()) {
    break;
  } else {
    bfs(0, 0);
    answer++;
  }
}
console.log(answer);
