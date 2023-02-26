const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 4 13
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const [n, m, k] = input()
  .split(" ")
  .map((v) => +v);

const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input().split(" "));
}

const rotate = (x1, y1, x2, y2) => {
  let start = arr[x1][y1];
  for (let y = y1; y < y2; y++) {
    arr[x1][y] = arr[x1][y + 1];
  }
  for (let x = x1; x < x2; x++) {
    arr[x][y2] = arr[x + 1][y2];
  }

  for (let y = y2; y > y1; y--) {
    arr[x2][y] = arr[x2][y - 1];
  }

  for (let x = x2; x > x1; x--) {
    arr[x][y1] = arr[x - 1][y1];
  }

  arr[x1 + 1][y1] = start;
};

const count = Math.floor(Math.min(n, m) / 2);
for (let i = 0; i < count; i++) {
  const temp = 2 * (n + m) - 4 - 8 * i;
  //   console.log(temp, n, m);
  let rotateCount = k % temp;
  for (let j = 0; j < rotateCount; j++) {
    rotate(i, i, n - 1 - i, m - 1 - i);
  }
}

for (let i of arr) {
  console.log(i.join(" "));
}
