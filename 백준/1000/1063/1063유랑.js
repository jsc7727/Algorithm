const log = console.log;
const fs = require("fs");
const stdin = (
    false
        ? fs.readFileSync("/dev/stdin").toString()
        : fs.readFileSync("./input.txt").toString()
).split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let [king, stone, move] = input()
    .split(" ")
    .map((el) => el.replace("\r", ""));

let table = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8 };

king = [table[king[0]], +king[1]];
stone = [table[stone[0]], +stone[1]];

let positionX = [1, -1, 0, 0, 1, -1, 1, -1];
let positionY = [0, 0, -1, 1, 1, 1, -1, -1];

let movement = { R: 0, L: 1, B: 2, T: 3, RT: 4, LT: 5, RB: 6, LB: 7 };
const isValid = (x, y) => 1 <= x && x <= 8 && 1 <= y && y <= 8;

for (let i = 0; i < move; i++) {
    let m = movement[input().trim()];
    let x = positionX[m];
    let y = positionY[m];
    let nextKignX = king[0] + x; // 다음 king의 x 좌표
    let nextKingY = king[1] + y; // 다음 king의 y 좌표
    let [nextStoneX, nextStoneY] = stone;
    if (nextKignX == stone[0]) {
        // 만약 다음 king의 x 좌표가 현재 stone의 x 좌표와 겹친다면
        nextStoneX = stone[0] + x; // 다음 stone의 x 좌표
    }
    if (nextKingY == stone[1]) {
        nextStoneY = stone[1] + y; // 다음 stone의 y 좌표
    }
    if (
        // 좌표가 테이블을 벗어나지 않으면
        isValid(nextStoneX, nextStoneY) &&
        isValid(nextKignX, nextKingY)
    ) {
        // 위치 업데이트
        king = [nextKignX, nextKingY];
        stone = [nextStoneX, nextStoneY];
    }
}

log(String.fromCharCode(king[0] + 64) + king[1]);
log(String.fromCharCode(stone[0] + 64) + stone[1]);