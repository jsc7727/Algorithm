// https://www.acmicpc.net/problem/13990
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10 10
1
1 0
5 5
1 2 3 4`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().split(' ').map(v => +v);
const arr = new Array(N).fill(null).map(_ => new Array(M).fill(0));
const c = +input();
for (let i = 0; i < c; i++) {
    const [ix, iy] = input().split(' ').map(v => +v);
    arr[ix][iy] = 2;
}


let [x, y] = input().split(' ').map(v => +v);
arr[x][y] = 1;
const commands = input().split(' ').map(v => +v);
const arrows = [[], [-1, 0], [1, 0], [0, -1], [0, 1]] // [], 상, 하, 좌, 우

// 배열 뷰
const arrView = () => {
    for (let i of arr) {
        console.log(i.join(' '));
    }
    console.log();
}

// 딜레이
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < M;

const test = async () => {
    console.clear()
    while (true) {
        let count = 0;
        for (let command of commands) {
            while (true) {
                const [xx, yy] = arrows[command];
                const [xxx, yyy] = [x + xx, y + yy];
                // console.log("newplace", xxx, yyy, isValid(xxx, yyy), x, y)
                if (isValid(xxx, yyy) && arr[xxx][yyy] === 0) {
                    arrView();
                    await delay(500)
                    console.clear()
                    arr[xxx][yyy] = 1;
                    x = xxx;
                    y = yyy;
                    count++;
                }
                else {
                    break;
                }
            }

        }
        if (count === 0) break;
    }
    arrView();
    await delay(500)
}
test();
console.log(x, y)
