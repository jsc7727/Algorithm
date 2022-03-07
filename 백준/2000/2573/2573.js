const { ifError } = require('assert');
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 7
0 0 0 0 0 0 0
0 2 4 5 3 0 0
0 3 0 2 5 2 0
0 7 6 2 4 0 0
0 0 0 0 0 0 0
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();


const [n, m] = input().split(' ').map(v => +v);
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(input().split(' ').map(v => +v));
}

const arrows = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const isValid = (x, y) => 0 <= x && x < n && 0 <= y && y < m;

const iceBreak = (value, emptyPlace) => {
    const result = value - emptyPlace;
    if (result < 0) return 0;
    else return result;
}

const spendOneYearAfterIsEmpty = (arr) => {
    const temp = new Array(n).fill(null).map(_ => new Array(m).fill(0));
    let flag = false;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] === 0) continue;
            let emptyPlace = 0;
            for (let [a, b] of arrows) {
                const [x, y] = [i + a, j + b];
                if (isValid(x, y) && arr[x][y] === 0) {
                    emptyPlace++;
                }
            }
            temp[i][j] = iceBreak(arr[i][j], emptyPlace);
            if (temp[i][j] > 0) flag = true;
        }
    }
    return [temp, flag];
}


const iceBerg = (arr) => {
    let answer = 0;
    const checkList = new Array(n).fill(null).map(_ => new Array(m).fill(false));
    const listClear = (arr, value = false) => {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                arr[i][j] = value;
            }
        }
    }
    while (true) {
        listClear(checkList);
        let [res, flag] = spendOneYearAfterIsEmpty(arr);
        answer++;
        if (flag === false) return 0;
        arr = res;
        let count = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (arr[i][j] === 0 || checkList[i][j] === true) continue;
                const dfs = (i, j) => {
                    checkList[i][j] = true;
                    for (let [a, b] of arrows) {
                        const [x, y] = [i + a, j + b];
                        if (isValid(x, y) && arr[x][y] !== 0 && checkList[x][y] === false) {
                            dfs(x, y);
                        }
                    }
                }
                dfs(i, j)
                count++;
            }
        }
        // console.log(count)
        // for (let i of checkList) {
        //     console.log(i.join(' '))
        // }
        // for (let i of arr) {
        //     console.log(i.join(' '))
        // }

        if (count >= 2) return answer;
    }
}

console.log(iceBerg(arr));