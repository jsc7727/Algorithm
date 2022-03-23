const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 4
    0 0 0 1
    0 1 0 0
    0 0 0 0
    0 0 0 1
    0 0 0 0
    0 1 0 0
    0 0 0 1
`
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
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
];
const isValid = (x, y) => {
  return 0 <= x && x < N && 0 <= y && y < M;
};
const bfs = (a, b) => {
  const newArr = arr.map((v) => [...v]);
  const queue = [[a, b, 1]];
  newArr[a][b] = 2;
  while (queue.length > 0) {
    const [x, y, count] = queue.shift();
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (isValid(xxx, yyy)) {
        if (newArr[xxx][yyy] === 1) {
          return count;
        }
        if (newArr[xxx][yyy] === 0) {
          newArr[xxx][yyy] = 2;
          queue.push([xxx, yyy, count + 1]);
        }
      }
    }
  }
};

let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 0) {
      const v = bfs(i, j);
      result = Math.max(result, v);
    }
  }
}
console.log(result);
