const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const log = console.log;
let num = +input();

const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
const dy = [0, 0, -1, 1];

for (let i = 0; i < num; i++) {
  let [arr, visited, n, m] = getArrays();
  log(getBugs(visited, arr, n, m));
}

function getArrays() {
  let [n, m, cabbages] = input()
    .split(" ")
    .map((v) => +v);

  let arr = new Array(n).fill(null).map(() => new Array(m).fill(0));
  let visited = new Array(n).fill(null).map(() => new Array(m).fill(0));

  for (let k = 0; k < cabbages; k++) {
    let [m, n] = input()
      .split(" ")
      .map((v) => +v);

    arr[m][n] = 1;
  }
  return [arr, visited, n, m];
}

function bfs(x, y, visited, arr, n, m) {
  let queue = [];
  const isValid = (nextX, nextY) =>
    nextX >= n || nextX < 0 || nextY >= m || nextY < 0;
  queue.push([x, y]);
  while (queue.length > 0) {
    let [curX, curY] = queue.shift();
    visited[curX][curY] = 1;
    for (let i = 0; i < dx.length; i++) {
      let nextX = curX + dx[i];
      let nextY = curY + dy[i];
      if (isValid(nextX, nextY)) continue;
      else if (visited[nextX][nextY] === 0 && arr[nextX][nextY] === 1) {
        queue.push([nextX, nextY]);
        visited[nextX][nextY] = 1;
      }
    }
  }
}

function getBugs(visited, arr, n, m) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] === 0 && arr[i][j] === 1) {
        bfs(i, j, visited, arr, n, m);
        cnt++;
      }
    }
  }
  return cnt;
}
