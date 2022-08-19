// https://www.acmicpc.net/problem/21758

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
    2 5 4
    `
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();

const arr = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const sumArr = [arr[0]];
for (let i = 1; i < N; i++) {
  sumArr.push(sumArr[i - 1] + arr[i]);
}
let ans = 0;
for (let i = 1; i < N - 1; i++) {
  const temp =
    sumArr[N - 1] - arr[0] - arr[i] + (sumArr[N - 1] - sumArr[i - 1] - arr[i]);
  ans = Math.max(temp, ans);
}
for (let i = 1; i < N - 1; i++) {
  const temp = sumArr[N - 1] - arr[N - 1] - arr[i] + (sumArr[i] - arr[i]);
  ans = Math.max(temp, ans);
}
for (let i = 1; i < N - 1; i++) {
  const temp = sumArr[i] - arr[0] + (sumArr[N - 2] - sumArr[i - 1]);
  ans = Math.max(temp, ans);
}
console.log(ans);
