// https://www.acmicpc.net/problem/1051

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 5
    42101
    22100
    22101`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => +v);
const arr = [];
for (let i = 0; i < N; i++) {
    arr.push(input().trim().split('').map(v => +v));
}

const sizeCheck = (x, y, size) => {
    const flag = arr[x][y];
    const result = (flag === arr[x + size - 1][y] && flag === arr[x][y + size - 1] && flag === arr[x + size - 1][y + size - 1]);
    return result;
}

let answer = 1;
for (let squareSize = 2; squareSize <= Math.min(N, M); squareSize++) {
    for (let j = 0; j <= (M - squareSize); j++) {
        for (let k = 0; k <= (N - squareSize); k++) {
            console.log(squareSize, k, j)
            // console.log(check(k, j, squareSize))
            if (sizeCheck(k, j, squareSize)) {
                console.log(k, j, squareSize, check(k, j, squareSize))
                answer = Math.max(answer, squareSize ** 2);
                break;
            }
        }
    }
    console.log()
}
console.log(answer);