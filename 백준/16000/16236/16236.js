const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6
    5 4 3 2 3 4
    4 3 2 3 4 5
    3 2 9 5 6 6
    2 1 2 3 4 5
    3 2 1 6 5 4
    6 6 6 6 6 6`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const N = parseInt(input());
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
    if (fishSize === 7) return;
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
        const [x, y, count] = deque.shift();
        if (edibleFish(x, y)) {
            result.push([x, y, count]);
            continue;
        }
        for (let i = 0; i < 4; i++) {
            const [xx, yy] = iter[i];
            const xxx = x + xx;
            const yyy = y + yy;
            if (0 <= xxx && xxx < N && 0 <= yyy && yyy < N && !checkList[xxx][yyy] && parseInt(arr[xxx][yyy]) <= fishSize) {
                checkList[xxx][yyy] = true;
                deque.push([xxx, yyy, count + 1])
            }
        }
    }

    if (result.length === 0) return -1;
    else {
        result.sort((res1, res2) => {
            if (res1[2] === res2[2]) {
                if (res1[0] === res2[0]) {
                    return res1[1] - res2[1];
                }
                return res1[0] - res2[0];
            }
            return res1[2] - res2[2]
        })
        return result[0]
    }
}

let count = 0;
while (true) {
    // console.log("---------")
    // console.log(fishSize, leftoverFish);
    let result = bfs(arr, N, x, y);
    eatFish();

    if (result === -1) break;
    // for (let i of arr) {
    //     console.log(i.join(' '))
    // }
    x = result[0]
    y = result[1]
    arr[x][y] = '0';
    count += result[2];
}
console.log(count)