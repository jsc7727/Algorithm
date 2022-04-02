// https://www.acmicpc.net/problem/2630

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4
    1 1 1 0
    1 1 1 0
    1 1 1 0
    1 1 1 0`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const c = +input();
const arr = [];
for (let i = 0; i < c; i++) {
    arr.push(input().trim().split(' ').map(v => +v));
}

let blue = 0;
let white = 0;

const adder = (flag) => {
    if (flag === 1) blue++;
    else white++;
}

const check = (x, y, size) => {
    let flag = arr[x][y];
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (flag !== arr[i][j]) return false;
        }
    }
    return true;
}

const recursive = (x, y, size) => {
    if (size === 0) {
        return;
    }
    const newSize = Math.floor(size / 2);
    if (check(x, y, size)) {
        adder(arr[x][y])
        return;
    }
    else {
        recursive(x, y, newSize);
        recursive(x + newSize, y, newSize);
        recursive(x, y + newSize, newSize);
        recursive(x + newSize, y + newSize, newSize);
    }
}
recursive(0, 0, c);
console.log(white);
console.log(blue);
