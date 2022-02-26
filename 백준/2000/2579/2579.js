const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
    3
    2
    1`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
const arr = [0];
for (let i = 0; i < N; i++) {
    arr.push(parseInt(input()));
}
const dp = new Array(N + 1).fill(0);
dp[1] = arr[1];
if (N >= 2) dp[2] = arr[1] + arr[2];

for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3] + arr[i - 1]) + arr[i];
}

// console.log(arr);
// console.log(dp);
console.log(dp[N]);