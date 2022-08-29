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
    .map((_) => new Array(yLen + 1).fill(null).map((_) => [0, ""]));
  for (let x = 1; x <= xLen; x++) {
    for (let y = 1; y <= yLen; y++) {
      if (xArr[x - 1] === yArr[y - 1]) {
        dp[x][y][0] = dp[x - 1][y - 1][0] + 1;
        dp[x][y][1] = dp[x - 1][y - 1][1] + xArr[x - 1];
      } else {
        if (dp[x - 1][y][0] > dp[x][y - 1][0]) {
          dp[x][y][0] = dp[x - 1][y][0];
          dp[x][y][1] = dp[x - 1][y][1];
        } else {
          dp[x][y][0] = dp[x][y - 1][0];
          dp[x][y][1] = dp[x][y - 1][1];
        }
      }
    }
  }
  // for (let i of dp) {
  //   console.log(i);
  // }
  console.log(dp[xLen][yLen][0]);
  console.log(dp[xLen][yLen][1]);
};

solution();
