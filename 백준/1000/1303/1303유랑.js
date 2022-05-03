const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 5
WBWWW
WWWWW
BBBBB
BBBWW
WWWWW`
).split("\n");

const log = console.log;

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [n, m] = input()
  .split(" ")
  .map((_) => +_);

const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(input().trim());
}

let visited = new Array(n).fill(null).map((_) => new Array(m).fill(0));

const moves = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]; // 위, 아래, 좌, 우

// log(arr);
// log(arr[1][0]);

// const counter = (() => {
//     let cnt = 0;
//     return () => cnt++;
// })();

function bfs(cur, team) {
  let queue = [];
  queue.push(cur);
  while (queue.length > 0) {
    cnt++; // 카운트 올리는 위치 *****수정*****
    console.log(`queue: [${queue}]`);
    cur = queue.shift();
    visited[cur[0]][cur[1]] = 1;
    // let isTeam = arr[cur[0]][cur[1]] === team;
    // log(isTeam);
    // let flag = true;
    for (const move of moves) {
      // log(`move: ${move}`);
      let position = [cur[0] + move[0], cur[1] + move[1]];
      // log(visited);
      // log(position);
      if (
        position[0] < 0 ||
        position[0] >= n ||
        position[1] < 0 ||
        position[1] >= m
      ) {
        // 이동 위치가 범위를 벗어나거나
      } else if (visited[position[0]][position[1]] === 1) {
        // 이미 방문한 곳이거나
      } else if (arr[position[0]][position[1]] !== team) {
        // 같은 편이 아니면 스킵
      } else {
        // cnt++; *****수정*****
        console.log(`enque: ${position}`);
        queue.push(position);
        visited[position[0]][position[1]] = 1;
        // score[counter()] = 1;
        // flag = false;
      }
    }
    // if (isTeam && flag && queue.length === 0) {
    //     log("점수 카운트");
    //     score += cnt ** 2;
    //     cnt = 0;
    // }
    // counter();
  }
}

let cnt = 0;
// let score = 0;
// let score = new Array(n * m).fill(0);
// log((score[counter()] = 1));
// log(score);

//*****수정*****
let scoreB = 0;
let scoreW = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j] === 0) {
      cnt = 0;
      // *****수정*****
      if (arr[i][j] === "B") {
        // log("bfs 진입");
        bfs([i, j], "B");
        console.log("cnt : ", cnt);
        scoreB += cnt ** 2;
        // log(visited);
      } else {
        bfs([i, j], "W");
        console.log("cnt : ", cnt);
        scoreW += cnt ** 2;
        // log(visited);
      }
    }
  }
}

log(cnt);
log(scoreW, scoreB);
