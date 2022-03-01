// https://www.acmicpc.net/problem/11725

// https://csacademy.com/app/graph_editor/

// 2022-06-05

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7
    1 6
    6 3
    3 5
    4 1
    2 4
    4 7
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const c = +input();
const arr = new Array(c + 1).fill(null).map((_) => []);
const result = [];
for (let i = 0; i < c - 1; i++) {
  const [x, y] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  arr[x].push(y);
  arr[y].push(x);
}
console.log(arr);
const dfs = (left = 0, now = 1) => {
  result[now] = left;
  for (let i = 0; i < arr[now].length; i++) {
    if (arr[now][i] !== left) {
      dfs(now, arr[now][i]);
    }
  }
};
dfs();
console.log(result);
console.log(result.slice(2).join("\n"));
