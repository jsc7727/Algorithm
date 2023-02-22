const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    S S S T
    X X X X
    X X X X
    T T T X`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const n = +input();
const arrows = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const isValid = (x, y) => 0 <= x && x < n && 0 <= y && y < n;

const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input().split(" "));
}

const ts = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === "T") {
      ts.push([i, j]);
    }
  }
}
const bfs = () => {
  for (let [x, y] of ts) {
    for (let [xx, yy] of arrows) {
      let [nx, ny] = [x, y];
      while (isValid(nx, ny)) {
        if (arr[nx][ny] === "O") {
          break;
        }
        if (arr[nx][ny] === "S") {
          return false;
        }
        nx += xx;
        ny += yy;
      }
    }
  }
  return true;
};

let answer = false;
const recv = (count = 0) => {
  if (count === 3) {
    if (bfs()) {
      answer = true;
    }
    return;
  } else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i][j] === "X") {
          arr[i][j] = "O";
          recv(count + 1);
          arr[i][j] = "X";
        }
      }
    }
  }
};
recv();
console.log(answer ? "YES" : "NO");
