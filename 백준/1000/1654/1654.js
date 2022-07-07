const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2 3
    3
    2`
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
for (let i = 0; i < N; i++) {
  arr.push(+input().trim());
}
let left = 1;
let right = 2 ** 31 - 1;
let middle = Math.floor(right / 2);

const check = (n) => {
  let count = 0;
  for (let i of arr) {
    count += Math.floor(i / n);
  }
  return count >= M;
};
let answer = 0;
while (left <= right) {
  if (check(middle) === true) {
    answer = Math.max(answer, middle);
    left = middle + 1;
  } else {
    right = middle - 1;
  }
  middle = left + Math.floor((right - left) / 2);
}
console.log(answer);
