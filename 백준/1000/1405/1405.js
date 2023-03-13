const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `14 25 25 25 25
`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const [n, E, W, S, N] = input()
  .split(" ")
  .map((v) => +v);

const arr = new Array(31).fill(null).map((_) => new Array(31).fill(0));

const arrows = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const perArrows = [E, W, S, N].map((v) => v / 100);
let answer = 0;
const dfs = (x, y, count, per) => {
  if (count === n) {
    answer += per;
    return;
  }
  for (let i = 0; i < 4; i++) {
    const [xx, yy] = arrows[i];
    const [xxx, yyy] = [x + xx, y + yy];
    if (arr[xxx][yyy] === 0 && perArrows[i] !== 0) {
      arr[xxx][yyy] = 1;
      //   console.log(xxx, yyy);
      dfs(xxx, yyy, count + 1, per * perArrows[i]);
      arr[xxx][yyy] = 0;
    }
  }
};

arr[15][15] = 1;
dfs(15, 15, 0, 1);
console.log(answer);
