const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7
    3 1 6 2 7 30 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

input();
const arr = input()
  .trim()
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

let sum = 1;
for (let i of arr) {
  if (i > sum) break;
  sum += i;
}
console.log(sum);
