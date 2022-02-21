const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5
WBWWW
WWWWW
BBBBB
BBBWW
WWWWW`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [M, N] = input().split(' ').map(v => parseInt(v));
const checkList = new Array(N).fill(null).map(_ => new Array(M).fill(false));
const arr = [];
for (let i = 0; i < N; i++) {
    const inputList = input();
    arr.push(inputList);
}
// console.log(arr);
// console.log(checkList);
let W = 0;
let B = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (!checkList[i][j]) {
            let count = 0;
            const dfs = (x, y, word) => {
                count++;
                checkList[x][y] = true;
                for (let [xx, yy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
                    const xxx = x + xx;
                    const yyy = y + yy;
                    if (0 <= xxx && xxx < N && 0 <= yyy && yyy < M && !checkList[xxx][yyy] && arr[xxx][yyy] === word) {
                        dfs(xxx, yyy, word);
                    }
                }
            }
            if (arr[i][j] === 'W') {
                dfs(i, j, 'W');
                W += count ** 2;
            }
            else if (arr[i][j] === 'B') {
                dfs(i, j, 'B');
                B += count ** 2;
            }
            // console.log(checkList);
        }
    }
}

console.log(W, B)