// https://www.acmicpc.net/problem/13901
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

const [r, c] = input()
    .split(" ")
    .map((el) => +el);
const k = +input();

let blocks = [];

for (let i = 0; i < k; i++) {
    let [br, bc] = input()
        .split(" ")
        .map((el) => +el);
    blocks.push([br, bc]);
}

const [sr, sc] = input()
    .split(" ")
    .map((el) => +el);
const move = input()
    .split(" ")
    .map((el) => +el);

const x = [0, 0, 0, -1, 1]; // 순서대로 멈춤, 위(1), 아래(2), 왼쪽(3), 오른쪽(4)
const y = [0, -1, 1, 0, 0];

// log(move);

function contains(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== target[j]) {
                flag = false;
            }
        }
        if (flag) {
            return flag;
        }
    }
    return false;
}

function equals(el1, el2) {
    return el1.toString() === el2.toString();
}

function check(pos, roomSize) {
    for (let i = 0; i < roomSize.length; i++) {
        if (pos[i] > roomSize[i] || pos[i] < 0) return false;
    }
    return true;
}

// 탈출 조건
// 로봇의 다음 이동 위치가 직전 이동 위치와 같을 때
// 로봇의 다음 이동 위치가 방 크기를 벗어날 때

// 로봇의 다음 이동 위치가 장애물의 좌표가 같을 때
// 다음 이동 위치 좌표는 직전 이동 위치가 같음

// 다음 이동 위치는, 로봇의 현재 위치에서 move에 해당하는 좌표

// 탈출 조건을 만나지 않을 때까지 이동

let cur = [sr, sc];
let prev = [,];
let roomSize = [r - 1, c - 1];
let cnt = 0;
let tracker = [];

// log(blocks);

while (true) {
    for (let i = 0; ; i++) {
        console.log(`${i + 1}번째`);
        prev = cur;
        cur = [cur[0] + y[move[i % 4]], cur[1] + x[move[i % 4]]];
        tracker.push(prev);
        log(prev);
        log(cur);
        log(cnt);
        if (
            contains(blocks, cur) ||
            contains(tracker, cur) ||
            !check(cur, roomSize)
        ) {
            log(
                `⚙ 1동작
                현재 위치가 장애물의 위치와 같거나 이전 이동 위치와 같거나 방크기를 벗어남
                현재 위치를 폐기하고 이전 위치를 현재 위치로 할당 `
            );
            cur = prev;
            cnt++;
            log(
                "--------------------------------------------------------------------------------"
            );
            if (cnt > 3) {
                log("⚙ 3동작 : 현재 위치와 이전 위치가 사방에서 겹침");
                cur = prev;
                break;
            }
            continue;
        }
        cnt = 0;
        log(
            "--------------------------------------------------------------------------------"
        );
    }
    log(cur);
    break;
}