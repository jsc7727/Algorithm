const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
    10 20 10 30 20 50`
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
  let answer = 0;
  for (i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j <= i; j++) {
      if (arr[i] > arr[j] && dp[j] > max) max = dp[j];
    }
    dp[i] = max + 1;
    answer = Math.max(dp[i], answer);
  }
  return answer;
};

console.log(solution(arr1));
