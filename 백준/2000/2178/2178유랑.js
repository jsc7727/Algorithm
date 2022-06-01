const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 6
    110110
    110110
    111111
    111101`
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

// log(arr);

let visited = new Array(n).fill(null).map((_) => new Array(m).fill(0));

// log(visited);

// 상,하,좌,우
const dx = [0, 0, -1, 1]; // x 축
const dy = [-1, 1, 0, 0]; // y 축

function bfs(i, j) {
  let queue = [];
  queue.push([i, j]);
  visited[i][j] = 1;
  while (queue.length > 0) {
    // console.log(queue);
    let [i, j] = queue.shift();
    for (let k = 0; k < dx.length; k++) {
      let nextXPosition = i + dy[k];
      let nextYPosition = j + dx[k];
      // console.log(nextXPosition, nextYPosition);
      if (
        nextXPosition < 0 ||
        nextXPosition >= n ||
        nextYPosition < 0 ||
        nextYPosition >= m
      ) {
        // 좌표가 범위를 벗어나거나
        // log("좌표가 범위를 벗어남");
      } else if (visited[nextXPosition][nextYPosition] > 0) {
        // 이미 방문한 곳이거나
        // log("이미 방문함");
      } else if (arr[nextXPosition][nextYPosition] === "0") {
        // arr에서 위치의 값이 0이면 스킵
        // log("0이라서 갈 수 없음");
      } else {
        // console.log("queue에 들어감");
        if (nextXPosition + 1 === n && nextYPosition + 1 === m) {
          // console.log("---------------------------------------------");
          console.log(visited[i][j] + 1);
          visited[nextXPosition][nextYPosition] = visited[i][j] + 1;
          return;
        }
        visited[nextXPosition][nextYPosition] = visited[i][j] + 1;
        queue.push([nextXPosition, nextYPosition]);
      }
    }

    // console.log("--------");
  }
}

bfs(0, 0);
