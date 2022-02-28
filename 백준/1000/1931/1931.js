const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
    1 2 
    2 2
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = +input()
let arr = []
for (let i = 0; i < N; i++) {
    arr.push(input().trim().split(' ').map(v => +v));
}

arr.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    }
    return a[0] - b[0];
})

let time = 0; // endTime
let count = 0;

for (let [startTime, endTime] of arr) {
    if (startTime >= time) {
        count++;
        time = endTime;
    }
}
console.log(count)

조합 순열