
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6 10
..x.......
.....x....
.x....x...
...x...xx.
..........
....x.....
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
let result = 0;
const dfs = (x1, y1) => {
    arr[x1][y1] = 'x'
    // console.log(x1, y1)
    if (y1 === M - 1) {
        // 주석풀고 출력해보기
        // for (let i = 0; i < N; i++) {
        //     console.log(...arr[i])
        // }
        // console.log()
        // console.log()
        result++;
        return true;
    }
    // *for 문 현재 위치 기준 북동쪽, 동쪽,남동쪽 순서대로 for문이 돌아가야함!!!*
    for (let [x2, y2] of [[-1, 1], [0, 1], [1, 1]]) {
        const x3 = x1 + x2;
        const y3 = y1 + y2;
        if (0 <= x3 && x3 < N && 0 <= y3 && y3 < M && arr[x3][y3] !== 'x') {
            const result = dfs(x3, y3);
            if (result === true) {
                return true;
            }
        }
    }
    return false;
}

for (let i = 0; i < N; i++) {
    dfs(i, 0)
}
console.log(result)