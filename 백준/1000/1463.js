const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const t = input();
const dp = () => {
    const N = t + 1
    const dpArr = new Array(N).fill(Infinity);
    dpArr[0] = 0;
    dpArr[1] = 0;
    for (let i = 2; i < N; i++) {
        dpArr[i] = dpArr[i - 1] + 1;
        if (i % 2 === 0) {
            dpArr[i] = Math.min(dpArr[i], dpArr[i / 2] + 1);
        }
        if (i % 3 === 0) {
            dpArr[i] = Math.min(dpArr[i], dpArr[i / 3] + 1);
        }
    }
    return dpArr[t]
}

console.log(dp(t))