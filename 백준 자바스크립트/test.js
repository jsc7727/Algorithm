// const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// `
// ).split('\n');

// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// let t = input();
// while (t--) {
//     const [a, b] = input().split(' ').map(Number);
//     console.log(a + b);
// }


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
const tiling2 = function (n) {
    const memo = [1, 2];
    for (let i = 3; i <= n; i++) {
        memo[i % 2 === 1 ? 0 : 1] = (memo[0] + memo[1]) % 10007;
    }
    return memo[n % 2 === 1 ? 0 : 1];
};

console.log(tiling2(t))