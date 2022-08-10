// https://www.acmicpc.net/problem/2170
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    5 10
    15 20
    25 30
    7 35
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(
    input()
      .trim()
      .split(" ")
      .map((v) => +v)
  );
}
arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
// console.log(arr);

let answer = 0;
let checkIdx = -Infinity;
for (let [a, b] of arr) {
  const temp = b - Math.max(checkIdx, a);
  if (temp > 0) answer += temp;
  checkIdx = Math.max(checkIdx, b);
}
console.log(answer);
