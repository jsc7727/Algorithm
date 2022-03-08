// https://www.acmicpc.net/problem/2589
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 7
WLLWWWL
LLLWLLL
LWLWLWW
LWLWLLL
WLLWLWW`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();


const [n, m] = input().split(' ').map(v => +v);
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(input());
}
const isValid = (x, y) => 0 <= x && x < n && 0 <= y && y < m;
const clearList = (checkList) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            checkList[i][j] = false;
        }
    }
}

const treasureIsland = () => {
    let answer = 0;
    let sCount;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const checkList = new Array(n).fill(null).map(_ => new Array(m).fill(0));
            sCount = 0;
            const deque = [[i, j, 0]];
            clearList(checkList);
            while (deque.length > 0) {
                const [x, y, count] = deque.shift();
                if (count > sCount) sCount = count;
                checkList[x][y] = true;
                for (let [xx, yy] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                    const [xxx, yyy] = [x + xx, y + yy];
                    if (isValid(xxx, yyy) && arr[xxx][yyy] === 'L' && checkList[xxx][yyy] === false) {
                        deque.push([xxx, yyy, count + 1]);
                    }
                }
            }
            if (sCount > answer) answer = sCount;
        }
    }
    return answer;
}
const res = treasureIsland();
console.log(res);