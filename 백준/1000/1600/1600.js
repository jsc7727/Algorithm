// https://www.acmicpc.net/problem/1600
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1
4 4
0 0 0 0
1 0 0 0
0 0 1 0
0 1 0 0`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
const C = +input();
const [M, N] = input().trim().split(' ').map(v => +v);
const arr = [];
for (let i = 0; i < N; i++) {
    const inputArr = input().trim().split(' ').map(v => +v);
    arr.push(inputArr);
}

const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < M;
const arrows = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const horseArrows = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
const visited = new Array(N).fill(null).map(_ => new Array(M).fill(null).map(_ => new Array(C + 1).fill(0)));

const bfs = () => {
    const q = [[0, 0, C]];
    while (q.length > 0) {
        const [x1, y1, c] = q.shift();
        // console.log(x1, y1, c)
        // for (let i of visited) {
        //     console.log(i.join(' '));
        // }
        // console.log()
        if (x1 === (N - 1) && y1 === (M - 1)) return visited[x1][y1][c];
        if (c > 0) {
            for (let [x2, y2] of horseArrows) {
                const [x3, y3] = [x1 + x2, y1 + y2];
                if (isValid(x3, y3) && arr[x3][y3] === 0 && visited[x3][y3][c - 1] === 0) {
                    q.push([x3, y3, c - 1]);
                    visited[x3][y3][c - 1] = visited[x1][y1][c] + 1;
                }
            }
        }
        for (let [x2, y2] of arrows) {
            const [x3, y3] = [x1 + x2, y1 + y2];
            if (isValid(x3, y3) && arr[x3][y3] === 0 && visited[x3][y3][c] === 0) {
                q.push([x3, y3, c]);
                visited[x3][y3][c] = visited[x1][y1][c] + 1;
            }
        }
    }
    return -1;
}
console.log(bfs());

