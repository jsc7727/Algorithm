// https://www.acmicpc.net/problem/1783
// 병든 나이트

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `20 4`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [x, y] = input()
  .trim()
  .split(" ")
  .map((v) => +v);
let answer = 1;
if (x === 1) {
} else if (x === 2) {
  answer = Math.min(4, Math.floor((y + 1) / 2));
} else if (y < 7) {
  answer = Math.min(4, y);
} else {
  answer = y - 2;
}

console.log(answer);
