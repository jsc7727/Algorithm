
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
checkDic = {};
checkDic[arr[0][0]] = true;
let result = 1;
const dfs = (x1, y1, count = 1) => {
    // console.log(x1, y1, count)
    let useDfs = false;
    for (let [x2, y2] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
        const x3 = x1 + x2;
        const y3 = y1 + y2;
        if (0 <= x3 && x3 < N && 0 <= y3 && y3 < M && !checkDic.hasOwnProperty(arr[x3][y3])) {
            useDfs = true;
            checkDic[arr[x3][y3]] = true;
            dfs(x3, y3, count + 1);
            delete checkDic[arr[x3][y3]];
        }
    }
    if (!useDfs && count > result) {
        // console.log(checkDic)
        result = count;
    }
    return false;
}

dfs(0, 0)

console.log(result)