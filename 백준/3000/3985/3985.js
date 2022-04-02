// https://www.acmicpc.net/problem/3985

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10
3
7 8
6 9
5 10`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();


C = +input();
N = +input();
const check = new Array(C + 1).fill(0);
const check2 = new Array(C + 1).fill(0);
// let diffIndex = -1;
// let diff = 0;
const checker = [];
for (let i = 1; i <= N; i++) {
    const [start, end] = input().trim().split(' ').map(v => +v);
    checker.push(end - start);
    // console.log(end, start)
    // if ((end - start) > diff) {
    //     diff = end - start;
    //     diffIndex = i;
    // }
    for (let j = start; j <= end; j++) {
        if (check[j] === 0) {
            check[j] = i;
        }
    }
}
// console.log(check)
for (let i of check) {
    check2[i]++;
}
let idx = 1;
for (let i = 2; i < check2.length; i++) {
    if (check2[i] > check2[idx]) {
        idx = i;
    }
}
console.log(checker.indexOf(Math.max(...checker)) + 1);
console.log(idx);
