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
const q = [];
for (let i = 0; i < N; i++) {
  if (edgeCountList[i] === 0) {
    q.push(i);
    answer.push(i + 1);
  }
}
while (q.length > 0) {
  const v = q.shift();
  for (let i of graph[v]) {
    if (--edgeCountList[i] === 0) {
      q.push(i);
      answer.push(i + 1);
    }
  }
}
console.log(...answer);
