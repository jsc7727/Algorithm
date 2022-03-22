// https://www.acmicpc.net/problem/1388
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `........
    ........
    ........
    ........
    ........
    ........
    ##......
    ........
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let arr = [];
for (let i = 0; i < 8; i++) {
  arr.push(input().trim());
}

const visited = new Array(8)
  .fill(null)
  .map((_) => new Array(8).fill(null).map((_) => false));

const arrows = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 0],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
const isValid = (x, y) => 0 <= x && x < 8 && 0 <= y && y < 8;

const afterOneSecond = () => {
  arr = ["........", ...arr.slice(0, -1)];
};
const bfs = () => {
  let q = [[7, 0]];
  let count = 0;
  while (q.length > 0) {
    const list = [];
    for (let i of arr) {
      console.log(i);
    }
    console.log(q, q.length, count);
    for (let i = 0; i < q.length; i++) {
      const [x, y] = q[i];
      if (x === 0 && y === 7) {
        console.log("??");
        return 1;
      }
      if (count === 8) {
        console.log("???");
        return 1;
      }
      if (arr[x][y] === "#") continue;
      for (let [xx, yy] of arrows) {
        const [xxx, yyy] = [x + xx, y + yy];
        if (
          isValid(xxx, yyy) &&
          arr[xxx][yyy] === "." &&
          visited[xxx][yyy] === false
        ) {
          visited[xxx][yyy] = true;
          list.push([xxx, yyy]);
        }
      }
    }
    q = list;
    count++;
    afterOneSecond();
  }
  return 0;
};
console.log(bfs());
