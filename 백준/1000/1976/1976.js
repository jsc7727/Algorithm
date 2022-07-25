// https://www.acmicpc.net/problem/1976
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `0
    0
    1 1
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input().trim();
const M = +input().trim();
const graph = [];
for (let i = 0; i < N; i++) {
  graph.push(
    input()
      .trim()
      .split(" ")
      .map((v) => +v)
  );
}

const visited = new Array(N).fill(false);

const path = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const bfs = (start) => {
  const q = [start];
  visited[start] = true;
  while (q.length > 0) {
    const v = q.shift();
    for (let i = 0; i < N; i++) {
      if (visited[i] === false && graph[v][i] === 1) {
        visited[i] = true;
        q.push(i);
      }
    }
  }
};
bfs(path[0] - 1);
const check = () => {
  for (let i = 0; i < path.length; i++) {
    if (visited[path[i] - 1] === false) return false;
  }
  return true;
};
// console.log(visited);
console.log(check() === true ? "YES" : "NO");
