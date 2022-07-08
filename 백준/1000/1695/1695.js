// https://www.acmicpc.net/problem/1695
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    1 2 3 4 2
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

const dp = new Array(2).fill(null).map((_) => new Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (arr[N - i] === arr[j - 1]) {
      dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
    } else {
      dp[i % 2][j] = Math.max(dp[i % 2][j - 1], dp[(i - 1) % 2][j]);
    }
  }
}
console.log(N - dp[N % 2][N]);
