const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 3 0 0 16
    0 1 2
    3 4 5
    6 7 8
    4 4 1 1 3 3 2 2 4 4 1 1 3 3 2 2`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M, R, C] = input().trim().split(' ').map(v => parseInt(v));
const arr = [];
for (let i = 0; i < N; i++) {
    const inputList = input().trim().split(' ').map(v => +v);
    arr.push(inputList);
}
const command = input().trim().split(' ').map(v => +v);
let column = [0, 0, 0, 0];
let row = [0, 0, 0, 0];

const getFront = () => {
    return column[1];
}

const getBottom = () => {
    return column[3];
}

const setBottom = (value) => {
    column[3] = row[0] = value;
}

const throwEast = () => {
    row = [row[3], ...row.slice(0, 3)];
    column[3] = row[0];
    column[1] = row[2];
}
const throwWest = () => {
    row = [...row.slice(1), row[0]];
    column[3] = row[0];
    column[1] = row[2];
}

const throwNorth = () => {
    column = [...column.slice(1), column[0]];
    row[0] = column[3];
    row[2] = column[1];
}

const throwSouth = () => {
    column = [column[3], ...column.slice(0, 3)];
    row[0] = column[3];
    row[2] = column[1];
}

const arrows = [[0, 1], [0, -1], [-1, 0], [1, 0]] // 동 서 북 남
let nowPlace = [R, C];
const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < M;
for (let i of command) {
    i = i - 1;
    const [x, y] = nowPlace;
    const [xx, yy] = arrows[i];
    const [xxx, yyy] = [x + xx, y + yy];
    if (isValid(xxx, yyy)) {
        nowPlace = [xxx, yyy];
        if (i === 0) { // 동
            throwEast();
        }
        else if (i === 1) { // 서
            throwWest();
        }
        else if (i === 2) { // 북
            throwNorth();
        }
        else if (i === 3) { // 남
            throwSouth();
        }
        if (arr[xxx][yyy] === 0) {
            arr[xxx][yyy] = getBottom();
        }
        else {
            setBottom(arr[xxx][yyy]);
            arr[xxx][yyy] = 0;
        }
        console.log(getFront());
    }
}

