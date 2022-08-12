const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
    5
    20 3 14 6 7 8 18 10 12 15
    `
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input().trim();
const M = +input().trim();
const arr = input()
  .trim()
  .split(" ")
  .map((v) => +v);
arr.sort((a, b) => a - b);

const diff = [];
for (let i = 1; i < arr.length; i++) {
  diff.push(arr[i] - arr[i - 1]);
}
diff.sort((a, b) => a - b);
let sum = 0;
for (let i = 0; i < N - M; i++) {
  sum += diff[i];
}
console.log(sum);
