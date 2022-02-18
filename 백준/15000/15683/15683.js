const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6 6
1 0 0 0 0 0
0 1 0 0 0 0
0 0 1 5 0 0
0 0 5 1 0 0
0 0 0 0 1 0
0 0 0 0 0 1`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => parseInt(v));
const arr = [];
const countList = [];

const addCheckList = (x, y, arrow, value) => {
    const [x1, y1] = arrow;
    const x3 = x + x1;
    const y3 = y + y1;
    if (0 <= x3 && x3 < N && 0 <= y3 && y3 < M && arr[x3][y3] !== 6) {
        countList[x3][y3] += value;
        addCheckList(x3, y3, arrow, value);
    }
}
const counter = () => {
    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (countList[i][j] === 0) {
                count++;
            }
        }
    }
    return count;
}

for (let i = 0; i < N; i++) {
    arr.push(input().split(' ').map(v => ~~(v)));
    countList.push(new Array(M).fill(0));
}


const dfsList = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (arr[i][j] !== 6 && arr[i][j] !== 0) {
            dfsList.push([i, j]);
            countList[i][j] += 1;
        }
        if (arr[i][j] === 6) countList[i][j] = '';
    }
}
let result = 65;
const dfs = (idx) => {
    if (idx === dfsList.length) {
        const count = counter()
        if (count < result) result = count;
        return;
    }
    const [x, y] = dfsList[idx];
    if (arr[x][y] === 1) {
        for (let arrow of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            addCheckList(x, y, arrow, 1);
            dfs(idx + 1)
            addCheckList(x, y, arrow, -1);
        }
    }
    else if (arr[x][y] === 2) {
        for (let arrow of [[[-1, 0], [1, 0]], [[0, -1], [0, 1]]]) {
            addCheckList(x, y, arrow[0], 1);
            addCheckList(x, y, arrow[1], 1);
            dfs(idx + 1)
            addCheckList(x, y, arrow[0], -1);
            addCheckList(x, y, arrow[1], -1);
        }
    }
    else if (arr[x][y] === 3) {
        const forList = [
            [[-1, 0], [0, 1]],
            [[0, 1], [1, 0]],
            [[1, 0], [0, -1]],
            [[0, -1], [-1, 0]],
        ]
        for (let arrow of forList) {
            addCheckList(x, y, arrow[0], 1);
            addCheckList(x, y, arrow[1], 1);
            dfs(idx + 1)
            addCheckList(x, y, arrow[0], -1);
            addCheckList(x, y, arrow[1], -1);
        }
    }
    else if (arr[x][y] === 4) {
        const forList = [
            [[-1, 0], [0, 1], [1, 0]],
            [[0, 1], [1, 0], [0, -1]],
            [[1, 0], [0, -1], [-1, 0]],
            [[0, -1], [-1, 0], [0, 1]],
        ]
        for (let arrow of forList) {
            addCheckList(x, y, arrow[0], 1);
            addCheckList(x, y, arrow[1], 1);
            addCheckList(x, y, arrow[2], 1);
            dfs(idx + 1)
            addCheckList(x, y, arrow[0], -1);
            addCheckList(x, y, arrow[1], -1);
            addCheckList(x, y, arrow[2], -1);
        }
    }
    else if (arr[x][y] === 5) {
        for (let arrow of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            addCheckList(x, y, arrow, 1);
        }
        dfs(idx + 1)
    }
}
dfs(0);
console.log(result);
