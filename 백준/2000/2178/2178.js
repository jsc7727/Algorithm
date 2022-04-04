const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 7
    1011111
    1110001
    1000001
    1000001
    1000001
    1000001
    1111111`
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
      .split("")
      .map((v) => +v)
  );
}
for (let i of arr) {
  console.log(i.join(" "));
}

const start = [0, 0];
const arrows = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const q = [[0, 0, 1]];
arr[0][0] = 0;
const isValid = (x, y) => {
  return 0 <= x && x < N && 0 <= y && y < M;
};
while (q.length > 0) {
  const [x, y, count] = q.shift();
  if (x === N - 1 && y === M - 1) {
    console.log(count);
  }
  for (const [xx, yy] of arrows) {
    const [xxx, yyy] = [x + xx, y + yy];
    if (isValid(xxx, yyy) && arr[xxx][yyy] === 1) {
      q.push([xxx, yyy, count + 1]);
      arr[xxx][yyy] = 0;
    }
  }
}

for (let i of arr) {
  console.log(i.join(" "));
}
// console.log(arr);
