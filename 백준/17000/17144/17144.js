const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7 8 50
0 0 0 0 0 0 0 9
0 0 0 0 3 0 0 8
-1 0 5 0 0 0 22 0
-1 8 0 0 0 0 0 0
0 0 0 0 0 10 43 0
0 0 5 0 15 0 0 0
0 0 40 0 0 0 20 0`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [R, C, T] = input().split(' ').map(v => parseInt(v));
let arr = [];
let airCleaner = [];
for (let i = 0; i < R; i++) {
    const inputData = input().split(' ').map(v => parseInt(v));
    if (inputData[0] === -1) airCleaner.push(i);
    arr.push(inputData);
}

let newArray = new Array(R).fill(null).map(_ => new Array(C).fill(0));
const rotateLeft = (arr, x1, y1, x2, y2) => {
    let temp = arr[x1][y1];
    for (let x = 1; x <= x2; x++) {
        let temp2 = arr[x][y1];
        arr[x][y1] = temp;
        temp = temp2;
    }
    for (let y = 1; y <= y2; y++) {
        let temp2 = arr[x2][y];
        arr[x2][y] = temp;
        temp = temp2;
    }
    for (let x = x2 - 1; x >= 0; x--) {
        let temp2 = arr[x][y2];
        arr[x][y2] = temp;
        temp = temp2;
    }
    for (let y = y2 - 1; y >= 0; y--) {
        let temp2 = arr[x1][y];
        arr[x1][y] = temp;
        temp = temp2;
    }
    for (let [addX, addY] of [[0, 1]]) {
        const x3 = x2 + addX;
        const y3 = y1 + addY;
        if (innerChecker(x3, y3, x1, y1, x2 + 1, y2 + 1)) {
            arr[x3][y3] = 0;
        }
    }
    arr[x2][y1] = -1;
}
const rotateRight = (arr, x1, y1, x2, y2) => {
    let temp = arr[x1][y1];
    for (let y = 1; y <= y2; y++) {
        let temp2 = arr[x1][y];
        arr[x1][y] = temp;
        temp = temp2;
    }
    for (let x = x1 + 1; x <= x2; x++) {
        let temp2 = arr[x][y2];
        arr[x][y2] = temp;
        temp = temp2;
    }
    for (let y = y2 - 1; y >= 0; y--) {
        let temp2 = arr[x2][y];
        arr[x2][y] = temp;
        temp = temp2;
    }
    for (let x = x2 - 1; x >= x1; x--) {
        let temp2 = arr[x][y1];
        arr[x][y1] = temp;
        temp = temp2;
    }
    for (let [addX, addY] of [[0, 1]]) {
        const x3 = x1 + addX;
        const y3 = y1 + addY;
        if (innerChecker(x3, y3, x1, y1, x2 + 1, y2 + 1)) {
            arr[x3][y3] = 0;
        }
    }
    arr[x1][y1] = -1;
}

const innerChecker = (x, y, xMin, yMin, xMax, yMax) => {
    return (xMin <= x && x < xMax && yMin <= y && y < yMax);
}

for (let i = 0; i < T; i++) {
    for (let x = 0; x < R; x++) {
        for (let y = 0; y < C; y++) {
            if (arr[x][y] === -1) {
                newArray[x][y] = -1;
                continue;
            }
            let count = 0;
            const n = Math.floor(arr[x][y] / 5)
            for (let [xx, yy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                const xxx = x + xx;
                const yyy = y + yy;
                if (innerChecker(xxx, yyy, 0, 0, R, C) && arr[xxx][yyy] !== -1) {
                    count += n;
                    newArray[xxx][yyy] += n;
                }
            }
            newArray[x][y] += (arr[x][y] - count);
            arr[x][y] = 0; // 다시 초기화
        }
    }
    for (let ac of airCleaner) {
        newArray[ac][0] = -1;
    }
    // for (let i of newArray) {
    //     console.log(i.join('  '));
    // }
    // console.log()
    // console.log("---------------------------")
    // console.log()
    rotateLeft(newArray, 0, 0, airCleaner[0], C - 1);
    // for (let i of newArray) {
    //     console.log(i.join('  '));
    // }
    // console.log()
    // console.log("---------------------------")
    // console.log()
    rotateRight(newArray, airCleaner[1], 0, R - 1, C - 1);
    // for (let i of newArray) {
    //     console.log(i.join('  '));
    // }
    const temp = arr;
    arr = newArray;
    newArray = temp;


}


let result = 0;
for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
        if (arr[x][y] !== -1) result += arr[x][y];
    }
}

console.log(result);

// rotateRight(newArray, 3, 0, 6, 7);
