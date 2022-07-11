// https://www.acmicpc.net/problem/1707
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1
    4 3
    1 2
    4 3
    2 3
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const C = +input();

for (let _ = 0; _ < C; _++) {
  const [N, M] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  const graph = new Array(N + 1).fill(null).map((_) => []);
  for (let i = 0; i < M; i++) {
    const [a, b] = input()
      .trim()
      .split(" ")
      .map((v) => +v);
    graph[a].push(b);
    graph[b].push(a);
  }
  //   console.log(graph);
  const visited = new Array(N + 1).fill(0);
  const bfs = (a) => {
    const q = [a];
    visited[a] = true;
    while (q.length > 0) {
      const v = q.shift();
      for (let i of graph[v]) {
        if (visited[i] === 0) {
          visited[i] = !visited[v];
          q.push(i);
        } else {
          //   console.log(visited[i], visited[v], i, v);
          if (visited[i] === visited[v]) {
            return false;
          }
        }
      }
    }
    return true;
  };
  let answer = "YES";
  for (let i = 1; i <= N; i++) {
    if (visited[i] === 0) {
      const result = bfs(i);
      if (result === false) {
        answer = "NO";
        break;
      }
    }
  }
  console.log(answer);
}
