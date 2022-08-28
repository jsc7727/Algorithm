const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
    5
    5 4 3 2 1
    2
    2 4
    3 4
    3
    2 3 1
    0
    4
    1 2 3 4
    3
    1 2
    3 4
    2 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const __ = +input();

for (let _ = 0; _ < __; _++) {
  const N = +input().trim();
  const arr = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  const M = +input().trim();
  const set = new Set();
  for (let i = 0; i < M; i++) {
    const [a, b] = input().trim().split(" ");
    set.add(`${a} ${b}`);
    set.add(`${b} ${a}`);
  }

  const edgeList = new Array(N).fill(0);
  const graph = new Array(N).fill(null).map((_) => []);
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (set.has(`${arr[i]} ${arr[j]}`) || set.has(`${arr[j]} ${arr[i]}`)) {
        edgeList[i]++;
        graph[j].push(i);
      } else {
        edgeList[j]++;
        graph[i].push(j);
      }
    }
  }

  const q = [];
  const answer = [];
  for (let i = 0; i < N; i++) {
    if (edgeList[i] === 0) {
      q.push(i);
    }
  }
  if (q.length > 1) {
    console.log("?");
    continue;
  }

  while (q.length > 0) {
    const v = q.shift();
    answer.push(arr[v]);
    for (let i of graph[v]) {
      if (--edgeList[i] === 0) {
        q.push(i);
      }
    }
  }
  if (answer.length === N) {
    console.log(...answer);
  } else {
    console.log("IMPOSSIBLE");
  }
}
