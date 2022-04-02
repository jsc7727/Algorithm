// https://www.acmicpc.net/problem/2636
const fs = require('fs');
const { off } = require('process');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `13 12
0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 1 1 0 0 0
0 1 1 1 0 0 0 1 1 0 0 0
0 1 1 1 1 1 1 0 0 0 0 0
0 1 1 1 1 1 0 1 1 0 0 0
0 1 1 1 1 0 0 1 1 0 0 0
0 0 1 1 0 0 0 1 1 0 0 0
0 0 1 1 1 1 1 1 1 0 0 0
0 0 1 1 1 1 1 1 1 0 0 0
0 0 1 1 1 1 1 1 1 0 0 0
0 0 1 1 1 1 1 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => +v);

let arr = [];
let cheeseCount = 0;
let prevCheeseCount = 0;
let answer = 0;

for (let i = 0; i < N; i++) {
    const inputArr = input().split(' ').map(v => +v);
    arr.push(inputArr);
    cheeseCount += inputArr.reduce((a, b) => a + b);
}

const isValid = (x, y) => 0 < x && x < (N - 1) && 0 < y && y < (M - 1);
const arrows = [[-1, 0], [0, 1], [1, 0], [0, -1]];
let checkList = [];
let newArr = arr.map(v => v.map(v => v));

const bfs = (x, y, c) => {
    const q = [[x, y]];
    arr[x][y] = c;
    let check = 0;
    while (q.length > 0) {
        const [x1, y1] = q.pop();
        arr[x1][y1] = c;
        for (let [x2, y2] of arrows) {
            const [x3, y3] = [x1 + x2, y1 + y2];
            // console.log(x3, y3, isValid(x3, y3))
            if (isValid(x3, y3)) {
                if (arr[x3][y3] === 0) {
                    q.push([x3, y3]);
                }
            }
            else {
                check++;
            }
        }
    }
    if (check === 0) checkList.push(c);
}


while (cheeseCount > 0) {
    answer++;
    let count = 2;
    checkList = [];
    for (let i = 1; i < N - 1; i++) {
        for (let j = 1; j < M - 1; j++) {
            if (arr[i][j] === 0) {
                bfs(i, j, count);
                count++;
            }
        }
    }

    // for (let i of arr) {
    //     console.log(i.join(' '));
    // }

    // console.log(checkList, cheeseCount)
    prevCheeseCount = cheeseCount;
    for (let i = 1; i < N - 1; i++) {
        for (let j = 1; j < M - 1; j++) {
            if (arr[i][j] === 1) {
                for (let [xx, yy] of arrows) {
                    const [xxx, yyy] = [i + xx, j + yy];
                    if (arr[xxx][yyy] !== 1 && !checkList.includes(arr[xxx][yyy])) {
                        newArr[i][j] = 0;
                        cheeseCount -= 1;
                        break;
                    }
                }
            }
        }
    }
    // for (let i of newArr) {
    //     console.log(i.join(' '));
    // }
    // console.log(checkList, cheeseCount)
    arr = newArr;
    newArr = arr.map(v => v.map(v => v));
}

console.log(answer);
console.log(prevCheeseCount);