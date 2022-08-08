// https://www.acmicpc.net/problem/16234
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 10 50
    10 100 20 90
    80 100 60 70
    70 20 30 40
    50 20 100 10`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, L, R] = input()
  .split(" ")
  .map((v) => +v);

const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(
    input()
      .trim()
      .split(" ")
      .map((v) => +v)
  );
}

const arrows = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < N;
const gateOpen = (value) => L <= value && value <= R;
const bfs = (a, b) => {
  let idx = 0;
  let sum = 0;
  const q = [[a, b]];
  let isAllSame = true;
  while (q.length > idx) {
    const [x, y] = q[idx];
    sum += arr[x][y];
    if (isAllSame === true && arr[a][b] !== arr[x][y]) {
      isAllSame = false;
    }
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (
        isValid(xxx, yyy) &&
        visited[xxx][yyy] === false &&
        gateOpen(Math.abs(arr[x][y] - arr[xxx][yyy]))
      ) {
        visited[xxx][yyy] = true;
        q.push([xxx, yyy]);
      }
    }
    idx++;
  }
  for (let [x, y] of q) {
    arr[x][y] = Math.floor(sum / q.length);
  }
  return q.length > 0 && isAllSame === false;
};

let answer = 0;

while (true) {
  var visited = new Array(N).fill(null).map((_) => new Array(N).fill(false));
  let flag = false;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === false) {
        visited[i][j] = true;
        const result = bfs(i, j);
        if (result === true) flag = true;
      }
    }
  }
  if (flag === false) break;
  else answer++;
}
console.log(answer);
