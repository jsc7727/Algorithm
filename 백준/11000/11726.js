const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `50
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const t = input();
const tiling = function (n) {
    const memo = [1, 2];
    for (let i = 3; i <= n; i++) {
        memo[i % 2 === 1 ? 0 : 1] = (memo[0] + memo[1]) % 10007;
    }
    return memo[n % 2 === 1 ? 0 : 1];
};

console.log(tiling(t))