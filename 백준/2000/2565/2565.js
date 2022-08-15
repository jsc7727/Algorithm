const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `8
    1 8
    3 9
    2 2
    4 1
    6 4
    10 10
    9 7
    7 6`
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
arr.sort((a, b) => a[0] - b[0]);
const dp = new Array(N).fill(0);
for (i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j <= i; j++) {
    if (arr[i][1] > arr[j][1]) {
      count = Math.max(count, dp[j]);
    }
  }
  dp[i] = count + 1;
}
console.log(N - Math.max(...dp));
