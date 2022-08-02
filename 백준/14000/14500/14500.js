const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 5
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5
    1 2 3 4 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
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
  [0, -1],
  [1, 0],
  [-1, 0],
];

const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < M;
const visited = new Array(N).fill(null).map((_) => new Array(M).fill(false));
let max = 0;
const dfs = (x, y, sum = 0, count = 0) => {
  if (count === 4) {
    if (sum > max) max = sum;
    return;
  }
  for (let [xx, yy] of arrows) {
    const [xxx, yyy] = [x + xx, y + yy];
    if (isValid(xxx, yyy) && visited[xxx][yyy] === false) {
      visited[xxx][yyy] = true;
      dfs(xxx, yyy, sum + arr[xxx][yyy], count + 1);
      visited[xxx][yyy] = false;
    }
  }
};

const searchList = [];
for (let i = 0; i < arrows.length; i++) {
  const newArrows = [...arrows];
  newArrows.splice(i, 1);
  searchList.push(newArrows);
}

const checker = (x, y) => {
  for (let searchArrows of searchList) {
    let sum = arr[x][y];
    for (let [xx, yy] of searchArrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (!isValid(xxx, yyy)) break;
      sum += arr[xxx][yyy];
    }
    if (sum > max) max = sum;
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    dfs(i, j);
    checker(i, j);
  }
}

console.log(max);
