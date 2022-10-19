const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
    1 5 2 1 4 3 4 5 2 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = +input().trim();
const arr1 = input()
  .trim()
  .split(" ")
  .map((v) => +v);
const arr2 = [...arr1].reverse();
const solution = (arr) => {
  const dp = new Array(n).fill(1);
  for (i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j <= i; j++) {
      if (arr[i] > arr[j] && dp[j] > max) max = dp[j];
    }
    dp[i] = max + 1;
  }
  return dp;
};

const dp1 = solution(arr1);
const dp2 = solution(arr2).reverse();
console.log(dp1, dp2);
let answer = 0;
for (let i = 0; i < n; i++) {
  answer = Math.max(answer, dp1[i] + dp2[i]);
}
console.log(answer);
