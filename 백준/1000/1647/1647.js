const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7 12
1 2 3
1 3 2
3 2 1
2 5 2
3 4 4
7 3 6
5 1 5
1 6 2
6 4 1
6 5 3
4 5 3
6 7 4`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => parseInt(v));

const find = (checkList, x) => {
    if (checkList[x] !== x) {
        checkList[x] = find(checkList, checkList[x])
    }
    return checkList[x];
}

const union = (checkList, x, y) => {
    x = find(checkList, x);
    y = find(checkList, y);
    if (x !== y) {
        checkList[x] = y;
        return true;
    }
    return false;
}

const checkList = new Array(N + 1).fill(null).map((_, idx) => idx);
// console.log(checkList)
const graph = [];
for (let i = 1; i <= M; i++) {
    const temp = input().split(' ').map(v => parseInt(v));
    graph.push([...temp])
}
// console.log(graph)
graph.sort((a, b) => a[2] - b[2])
// console.log(graph)
let result = 0;
let lastValue = 0;
for (let [x, y, value] of graph) {
    if (union(checkList, x, y)) {
        result += value;
        lastValue = value;
    }
}
console.log(result - lastValue);


