const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3 3
    1 1 0
    1 1 1
    1 0 1
    1 1 1`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [N, M] = input().trim().split(' ').map(v => parseInt(v));
const [R, C, D] = input().trim().split(' ').map(v => parseInt(v));
const arr = [];
for (let i = 0; i < N; i++) {
    const inputList = input().trim().split(' ').map(v => +v);
    arr.push(inputList);
}

const arrows = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // 북 동 남 서

let robotState = [R, C, D];
let answer = 0;
const clearLocation = (x, y) => {
    if (arr[x][y] === 0) {
        arr[x][y] = 2;
        answer++;
    }
}

const checkArrowsAreEmpty = (x, y) => {
    let check = 0;
    for (let [xx, yy] of arrows) {
        const [xxx, yyy] = [x + xx, y + yy];
        if (arr[xxx][yyy] !== 0) {
            check++;
        }
    }
    return check === 4;
}

const goBack = (x, y, nowArrow) => {
    const [xx, yy] = arrows[(2 + nowArrow) % 4];
    const [xxx, yyy] = [x + xx, y + yy];
    return [xxx, yyy];
}

const robotMove = () => {
    let flag = true;
    while (flag) {
        const [x, y, nowArrow] = robotState;
        clearLocation(x, y);
        // for (let i of arr) {
        //     console.log(i.join(' '))
        // }
        // console.log();
        if (checkArrowsAreEmpty(x, y)) {
            const [backX, backY] = goBack(x, y, nowArrow);
            if (arr[backX][backY] !== 1) {
                robotState = [backX, backY, nowArrow];
            }
            else {
                return answer;
            }
        }
        else {
            const arrow = nowArrow - 1 === -1 ? 3 : nowArrow - 1;
            const [xx, yy] = arrows[arrow];
            const [xxx, yyy] = [x + xx, y + yy];
            if (arr[xxx][yyy] === 0) {
                robotState = [xxx, yyy, arrow];
            }
            else {
                robotState = [x, y, arrow];
            }
        }
    }
}
robotMove();
console.log(answer);