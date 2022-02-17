
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 5
IEFCJ
FHFKC
FFALF
HFGCF
HMCHH
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => parseInt(v));
const arr = [];
for (let i = 0; i < N; i++) {
    arr.push(input().split(''))
}
// console.log(arr)

const checkLst = new Array(91).fill(false);
checkLst[arr[0][0].charCodeAt()] = true;
let result = 1;
const dfs = (x1, y1, count = 1) => {
    let useDfs = false;
    for (let [x2, y2] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
        const x3 = x1 + x2;
        const y3 = y1 + y2;
        if (0 <= x3 && x3 < N && 0 <= y3 && y3 < M && !checkLst[arr[x3][y3].charCodeAt()]) {
            useDfs = true;
            checkLst[arr[x3][y3].charCodeAt()] = true;
            dfs(x3, y3, count + 1);
            checkLst[arr[x3][y3].charCodeAt()] = false;
        }
    }
    if (!useDfs && count > result) {
        result = count;
    }
}

dfs(0, 0)

console.log(result)