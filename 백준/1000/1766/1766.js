const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 2
    4 2
    3 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const edgeCountList = new Array(N).fill(null).map((_) => 0);
const graph = new Array(N).fill(null).map((_) => []);
for (let i = 0; i < M; i++) {
  const [a, b] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  edgeCountList[b - 1]++;
  graph[a - 1].push(b - 1);
}

const answer = [];
let count = 0;
let q = [];
for (let i = 0; i < N; i++) {
  if (edgeCountList[i] === 0) {
    q.push(i);
    answer.push([i + 1, count]);
  }
}
while (q.length > 0) {
  const qq = [...q];
  q = [];
  count++;
  while (qq.length > 0) {
    const v = qq.shift();
    for (let i of graph[v]) {
      if (--edgeCountList[i] === 0) {
        q.push(i);
        answer.push([i + 1, count]);
      }
    }
  }
}
console.log(answer);
