const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `4 3
1 2 3 4
2 3 4 5
3 4 5 6
4 5 6 7
2 2 3 4
3 4 3 4
1 1 4 4`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => parseInt(v));
const arr = [];
arr.push(new Array(1024 + 1).fill(0))
for (let i = 1; i <= N; i++) {
    let s = 0;
    const temp = [0]
    arr.push(input().split(' ')
        .forEach((v, idx) => {
            s += parseInt(v);
            temp.push(s + arr[i - 1][idx + 1]);
        }));
    arr.push(temp);
}
// console.log(arr);
const getValue = ({ x1, y1, x2, y2 }) => {
    let northWest = 0;
    let north = 0;
    let west = 0;
    if (x1 > 0 && y1 > 0) {
        northWest = arr[x1 - 1][y1 - 1];
    }
    if (x1 > 0) {
        north = arr[x1 - 1][y2];
    }
    if (y1 > 0) {
        west = arr[x2][y1 - 1];
    }
    // const northWest = arr[x1 - 1]?.[y1 - 1] ? arr[x1 - 1][y1 - 1] : 0;
    // const north = arr[x1 - 1]?.[y2] ? arr[x1 - 1][y2] : 0;
    // const west = arr[x2]?.[y1 - 1] ? arr[x2][y1 - 1] : 0;
    return arr[x2][y2] - (north + west - northWest);
}
for (let i = 0; i < M; i++) {
    const [x1, y1, x2, y2] = input().split(' ').map(v => v - 1);;
    console.log(getValue({ x1, y1, x2, y2 }));
}