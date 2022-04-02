// https://www.acmicpc.net/problem/1149

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8
    71 39 44
    32 83 55
    51 37 63
    89 29 100
    83 58 11
    65 13 15
    47 25 29
    60 66 19`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const c = +input();
const dp = []
for (let i = 0; i < c; i++) {
    dp.push(input().trim().split(' ').map(v => +v));
}
for (let i = 1; i < c; i++) {
    dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}
console.log(Math.min(...dp[c - 1]))
