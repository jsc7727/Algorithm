// https://www.acmicpc.net/problem/1018

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8 8
    WBWBWBWB
    BWBWBWBW
    WBWBWBWB
    BWBBBWBW
    WBWBWBWB
    BWBWBWBW
    WBWBWBWB
    BWBWBWBW
    `
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().trim().split(' ').map(v => +v);
const arr = [];

const check = ['W', 'B']
let result = 65;
for (let i = 0; i < N; i++) {
    arr.push(input().trim());
}

const getMinChange = (x, y) => {
    const answer = [0, 0];
    for (let i = x; i < x + 8; i++) {
        for (let j = y; j < y + 8; j++) {
            const t1 = check[(j + (i % 2)) % 2];
            if (arr[i][j] !== t1) {
                answer[0]++;
            }
            else {
                answer[1]++;
            }
        }
        console.log(answer);
    }
    return Math.min(...answer);
}

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        result = Math.min(getMinChange(i, j), result);
    }
}

console.log(result);