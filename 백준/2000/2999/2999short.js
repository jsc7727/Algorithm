// https://www.acmicpc.net/problem/2999
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `123456`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const arr = input().split('');
const len = arr.length;
let N = 1;
let M = len;
for (let i = 0; i <= Math.sqrt(len); i++) {
    if (len % i === 0) {
        N = i;
        M = len / N;
    }
}
let answer = "";
// console.log(arr)
for (let i = 0; i < N; i++) { // 0 1
    for (let j = 0; j < M; j++) { // 0 1 2 
        console.log(N, j, i);
        console.log((N * j) + i)
        answer += arr[(N * j) + i];
    }
}
console.log(answer);

0 2 4 + 0 => 0 2 4
0 2 4 + 1 => 1 3 5