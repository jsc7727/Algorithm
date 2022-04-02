// https://www.acmicpc.net/problem/1120

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `koder topcoder`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [a, b] = input().trim().split(' ');
const aLen = a.length;
const bLen = b.length;
let answer = Infinity;

for (let i = 0; i <= bLen - aLen; i++) {
    const newB = b.slice(i);
    console.log(newB);
    let check = aLen;
    for (let j = 0; j < aLen; j++) {
        if (a[j] === newB[j]) {
            check--;
        }
    }
    console.log(check)
    answer = Math.min(answer, check);
}
console.log(answer);



// const log = console.log;

// const fs = require("fs");
// const stdin = (
//     false
//         ? fs.readFileSync("/dev/stdin").toString()
//         : fs.readFileSync("./input.txt").toString()
// ).split("\n");

// const input = (() => {
//     let line = 0;
//     return () => stdin[line++];
// })();

// let [a, b] = input().split(" ");

// let res = [];

// for (let i = 0; i <= b.length - a.length; i++) {
//     let str = b.substring(0, i) + a + b.substring(a.length + i, b.length);
//     res.push(str);
// }
// console.log(res);

// let min = 50;
// for (word of res) {
//     let cnt = 0;
//     for (let i = 0; i < b.length; i++) {
//         if (word[i] != b[i]) cnt++;
//     }
//     min = Math.min(min, cnt);
// }