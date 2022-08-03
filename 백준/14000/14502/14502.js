const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 7
    2 0 0 0 1 1 0
    0 0 1 0 1 2 0
    0 1 1 0 1 0 0
    0 1 0 0 0 0 0
    0 0 0 0 0 1 1
    0 1 0 0 0 0 0
    0 1 0 0 0 0 0`
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
const virusArr = [];
let safeArea = 0;
for (let i = 0; i < N; i++) {
  const inputData = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  for (let j = 0; j < M; j++) {
    if (inputData[j] === 2) {
      virusArr.push([i, j]);
    }
    if (inputData[j] === 0) {
      safeArea += 1;
    }
  }
  arr.push(inputData);
}

const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < M;
const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const bfs = () => {
  const q = [...virusArr];
  const newArr = arr.map((v) => [...v]);

  let count = 0;
  while (q.length > 0) {
    const [x, y] = q.shift();
    for (let [xx, yy] of directions) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (isValid(xxx, yyy) && newArr[xxx][yyy] === 0) {
        newArr[xxx][yyy] = 2;
        count += 1;
        q.push([xxx, yyy]);
      }
    }
  }
  return safeArea - count - 3;
};
let answer = 0;
const selector = (count = 0) => {
  if (count === 3) return;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0) {
        arr[i][j] = 1;
        selector(count + 1);
        const result = bfs();
        if (result > answer) {
          answer = result;
        }
        arr[i][j] = 0;
      }
    }
  }
};

selector();
console.log(answer);
