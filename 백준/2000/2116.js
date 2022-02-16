const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
2 3 1 6 5 4
3 1 2 4 6 5
5 6 4 1 3 2
1 3 6 2 4 5
4 1 6 5 2 3
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const t = input();
const inputArray = []
for (let i = 0; i < t; i++) {
    inputArray.push(input().split(' ').map(v => ~~v))
}
// A F | B D | C E  3번 체크해야함.
const checkList = [[0, 5], [1, 3], [2, 4]]

let result = 0;

const getFilterArray = (temp, lst) => {
    return lst.filter((v, idx) => !temp.includes(idx))
}

const getMaxValue = (temp, lst) => {
    return Math.max(...getFilterArray(temp, lst))
}
const getValue = (idx, arrIdx = 0) => {
    return inputArray[arrIdx][idx];
}

const dfs = (prevList, prevValue = null, arrIdx = 1,) => {
    if (inputArray.length === arrIdx) {
        // console.log(prevList, arrIdx)
        if (prevList > result) result = prevList;
        return;
    }
    for (let k of checkList) {
        const k0 = getValue(k[0], arrIdx)
        const k1 = getValue(k[1], arrIdx)
        const value = getMaxValue(k, inputArray[arrIdx]);
        if (k0 === prevValue) {
            prevList += value;
            dfs(prevList, k1, arrIdx + 1);
            prevList -= value;
        }
        else if (k1 === prevValue) {
            prevList += value;
            dfs(prevList, k0, arrIdx + 1);
            prevList -= value;
        }
    }
}
for (let k of checkList) {
    dfs(getMaxValue(k, inputArray[0]), getValue(k[0]));
    dfs(getMaxValue(k, inputArray[0]), getValue(k[1]));
}

console.log(result)