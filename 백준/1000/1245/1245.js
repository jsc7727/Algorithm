const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `8 7
    4 3 2 2 1 0 1
    3 3 3 2 1 0 1
    2 2 2 2 1 0 0
    2 1 1 1 1 0 0
    1 1 0 0 0 1 0
    0 0 0 1 1 1 0
    0 1 2 2 1 1 0
    0 1 1 1 2 1 0`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => parseInt(v));
const checkList = new Array(N).fill(null).map(_ => new Array(M).fill(false));
const arr = [];
for (let i = 0; i < N; i++) {
    const inputList = input().trim().split(' ').map(v => +v);
    arr.push(inputList);
}


const arrows = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];

const isValid = (x, y) => {
    return 0 <= x && x < N && 0 <= y && y < M;
}
let mount;

const dfs = (arr, x, y) => {
    checkList[x][y] = true;
    for (let [xx, yy] of arrows) {
        const [xxx, yyy] = [x + xx, y + yy];
        if (isValid(xxx, yyy)) {
            if (arr[x][y] < arr[xxx][yyy]) {
                mount = false;
            }
            if (checkList[xxx][yyy] === false && arr[x][y] === arr[xxx][yyy]) {
                dfs(arr, xxx, yyy);
            }
        }
    }
}

const check = (arr) => {
    let result = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (checkList[i][j] === false) {
                // console.log(i, j)
                mount = true;
                dfs(arr, i, j);
                if (mount) result++;
                // for (let i of checkList) {
                //     console.log(i.join(' '))
                // }
            }
        }
    }
    return result;
}

const res = check(arr);
console.log(res);
// for (let i of arr) {
//     console.log(i.join(' '))
// }

// for (let i of checkList) {
//     console.log(i.join(' '))
// }