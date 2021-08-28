// https://www.acmicpc.net/problem/1388
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `6 9
    -||--||--
    --||--||-
    |--||--||
    ||--||--|
    -||--||--
    --||--||-
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().trim().split(' ').map(v => +v);

let arr = [];
for (let i = 0; i < N; i++) {
    arr.push(input().trim().split(''));
}

const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < M;
const visited = new Array(N).fill(null).map(_ => new Array(M).fill(false))
const arrows = {
    '-': [[0, 1], [0, -1]],
    '|': [[1, 0], [-1, 0]]
}
const bfs = (i, j) => {
    const type = arr[i][j];
    let q = [[i, j]];
    visited[i][j] = true;
    while (q.length > 0) {
        const [x1, y1] = q.shift();
        visited[x1][y1] = true;
        for (let [x2, y2] of arrows[type]) {
            const [x3, y3] = [x1 + x2, y1 + y2];
            if (isValid(x3, y3) && type === arr[x3][y3] && visited[x3][y3] === false) {
                visited[x3][y3] = true;
                q.push([x3, y3]);
            }
        }
    }
}
let count = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (!visited[i][j]) {
            bfs(i, j);
            count++;
        }
    }
}
console.log(count);

