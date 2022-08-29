const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `ACAYKP
    CAPCAK`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const solution = () => {
  const xArr = input().trim();
  const yArr = input().trim();
  const xLen = xArr.length;
  const yLen = yArr.length;
  const dp = new Array(xLen + 1)
    .fill(null)
    .map((_) => new Array(yLen + 1).fill(0));
  for (let x = 1; x <= xLen; x++) {
    for (let y = 1; y <= yLen; y++) {
      if (xArr[x - 1] === yArr[y - 1]) {
        dp[x][y] = dp[x - 1][y - 1] + 1;
      } else {
        dp[x][y] = Math.max(dp[x - 1][y], dp[x][y - 1]);
      }
    }
  }
  //   for (let i of dp) {
  //     console.log(i.join(" "));
  //   }
  console.log(dp[xLen][yLen]);
};

solution();
