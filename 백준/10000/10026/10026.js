//https://www.acmicpc.net/problem/10026

const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    RRRBB
    GGBBB
    BBBRR
    BBRRR
    RRRRR
`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const arr1 = [];
const arr2 = [];
const N = +input();

for (let i = 0; i < N; i++) {
  const newArr = input().split("");
  arr1.push([...newArr]);
  arr2.push(newArr.map((v) => (v === "R" ? "G" : v)));
}

const arrows = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < N;
const dfs = (arr, x, y) => {
  const prevTemp = arr[x][y];
  arr[x][y] = "";
  for (let [xx, yy] of arrows) {
    const [xxx, yyy] = [x + xx, y + yy];
    if (isValid(xxx, yyy) && prevTemp === arr[xxx][yyy]) {
      dfs(arr, xxx, yyy);
    }
  }
};

const check = (arr) => {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] !== "") {
        dfs(arr, i, j);
        count++;
      }
    }
  }
  return count;
};
const res1 = check(arr1);
const res2 = check(arr2);
console.log(`${res1} ${res2}`);
