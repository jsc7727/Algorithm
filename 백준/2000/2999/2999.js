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
        // console.log(N, M)
    }
}
console.log(N, M)
const newArray = [];
for (let i = 0; i < M; i++) {
    newArray.push(arr.splice(0, N));
}
console.log(newArray)
let answer = "";
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        console.log(j, i);
        answer += newArray[j][i];
    }
}
console.log(answer);