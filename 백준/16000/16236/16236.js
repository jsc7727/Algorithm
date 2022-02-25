const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7
    3 5 0 6 4 5 5
    1 6 3 3 0 2 2
    6 2 1 3 1 5 1
    9 2 2 3 4 2 3
    2 1 6 2 0 0 4
    4 5 0 6 1 1 0
    5 4 3 2 1 4 0`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
// const checkList = new Array(N).fill(null).map(_ => new Array(N).fill(false));
const arr = [];
let x = 0;
let y = 0;
for (let i = 0; i < N; i++) {
    const inputList = input().trim().split(' ');
    const indexOfValue = inputList.indexOf('9');
    if (indexOfValue !== -1) {
        x = i;
        y = indexOfValue;
    }
    arr.push(inputList);
}
// console.log(arr)

// 물고기 사이즈
let fishSize = 2;
let leftoverFish = 2
const eatFish = () => {
    // if (fishSize === 6) return;

    leftoverFish -= 1;
    if (leftoverFish === 0) {
        fishSize++;
        leftoverFish = fishSize;
    }
}
const edibleFish = (x, y) => {
    return 0 < parseInt(arr[x][y]) && parseInt(arr[x][y]) < 7 && parseInt(arr[x][y]) < fishSize;
}

//bfs
const bfs = (arr, N, a, b) => {
    const checkList = new Array(N).fill(null).map(_ => new Array(N).fill(false));
    let deque = [[a, b, 0]];
    checkList[a][b] = true;
    arr[a][b] = '0'
    const result = [];
    const iter = [[-1, 0], [0, -1], [0, 1], [1, 0]];
    while (deque.length > 0) {
        const temp = [[], [], [], []];
        for (let [x, y, count] of deque) {
            if (edibleFish(x, y)) {
                // arr[x][y] = '0';
                checkList[x][y] = true;
                result.push([x, y, count])
            }
            for (let i = 0; i < 4; i++) {
                const [xx, yy] = iter[i];
                const xxx = x + xx;
                const yyy = y + yy;
                if (0 <= xxx && xxx < N && 0 <= yyy && yyy < N && !checkList[xxx][yyy] && parseInt(arr[xxx][yyy]) <= fishSize) {
                    // console.log(xxx, yyy)
                    checkList[xxx][yyy] = true;
                    temp[i].push([xxx, yyy, count + 1]);
                    // deque.push([xxx, yyy, count + 1])
                }
            }
        }
        deque = temp.flat();
    }
    console.log(result)
    return -1;
}

let count = 0;
while (true) {
    console.log(fishSize, leftoverFish);
    let result = bfs(arr, N, x, y);
    eatFish();
    console.log(fishSize, leftoverFish);


    if (result === -1) break;

    console.log(result);
    for (let i of arr) {
        console.log(i.join(' '))
    }
    x = result[0]
    y = result[1]
    count += result[2];
}
console.log(count)