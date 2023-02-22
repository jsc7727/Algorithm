const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    S X X X 
    O X X X
    X X X X
    T X X X`
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

let count = 0;
let flag = false;
const dfs = (arrowIndex, x, y) => {
  const [xx, yy] = arrows[arrowIndex];
  const [xxx, yyy] = [x + xx, y + yy];
  if (isValid(xxx, yyy)) {
    if (arr[xxx][yyy] === "S") {
      if (arr[x][y] === "T") {
        flag = true;
        return;
      }
      if (arr[x][y] === "X") {
        arr[x][y] = "O";
        count++;
      }
    } else if (arr[xxx][yyy] === "O") {
      return;
    } else {
      dfs(arrowIndex, xxx, yyy);
    }
  }
};
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === "T") {
      for (let k = 0; k < arrows.length; k++) {
        dfs(k, i, j);
      }
    }
  }
}

// for (let i of arr) {
//   console.log(i.join(" "));
// }
// console.log(count, flag);

console.log(flag === false && count <= 3 ? "YES" : "NO");
