const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 3
    1 0 2
    0 0 0
    3 0 0
    1 2 2`
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
const virusList2D = new Array(M + 1).fill(null).map((_) => new Array());
for (let i = 0; i < N; i++) {
  const inputData = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  for (let j = 0; j < N; j++) {
    if (inputData[j] !== 0) {
      virusList2D[inputData[j]].push([i, j, 0]);
    }
  }
  arr.push(inputData);
}

const [S, X, Y] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const virusList = virusList2D.flat();
const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < N;
const arrows = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const bfs = (lst) => {
  const q = lst;
  while (q.length > 0) {
    const [x, y, n] = q.shift();
    if (n >= S) break;
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (isValid(xxx, yyy) && arr[xxx][yyy] === 0) {
        arr[xxx][yyy] = arr[x][y];
        q.push([xxx, yyy, n + 1]);
      }
    }
  }
};

bfs(virusList);
// for (let i of arr) console.log(i);
console.log(arr[X - 1][Y - 1]);
