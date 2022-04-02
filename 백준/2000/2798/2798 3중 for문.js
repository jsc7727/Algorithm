// https://www.acmicpc.net/problem/2798
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 21
5 6 7 8 9`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let answer = 0;
const [N, M] = input().split(' ').map(v => +v);
let arr = input().split(' ').map(v => +v);
// console.log(N, M, arr)
const len = arr.length;
// console.log(arr, len)
for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        if (i === j) continue;
        for (let k = 0; k < len; k++) {
            if (i === k || j === k) continue;
            const sum = arr[i] + arr[j] + arr[k]
            if (M >= sum) {
                answer = Math.max(answer, sum);
            }
            if
        }
    }
}
console.log(answer);