// https://www.acmicpc.net/problem/11725

// https://csacademy.com/app/graph_editor/

// 2022-06-05

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `12
    1 2
    1 3
    2 4
    3 5
    3 6
    4 7
    4 8
    5 9
    5 10
    6 11
    6 12
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = +input();
let arr = [];

for (let i = 0; i < n; i++) {
  let next = input();
  if (next) {
    let [k, v] = next
      .trim()
      .split(" ")
      .map((_) => +_);
    arr.push([k, v]);
  } else {
    break;
  }
}
const log = console.log;

const base = new Array(n).fill(0).reduce(function (base, cur, idx) {
  base[idx + 1] = [];
  return base;
}, {});

const tree = arr.reduce(function (tree, cur) {
  tree[cur[1]].push(cur[0]);
  tree[cur[0]].push(cur[1]);
  return tree;
}, base);

const result = new Array(n + 1).fill(null); // hash
const queue = [1];

while (queue.length !== 0) {
  let cur = queue.shift();
  for (prune of tree[cur]) {
    if (result[prune] === null && prune !== 1) {
      queue.push(prune);
      result[prune] = cur;
    }
  }
}
log(result.slice(2).join("\n"));
