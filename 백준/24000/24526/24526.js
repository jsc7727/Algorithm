const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6 6
    1 2
    2 3
    3 4
    3 5
    3 6
    5 2`
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
const set = new Set();
for (let i = 0; i < M; i++) {
  const [b, a] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  if (set.has(`${b} ${a}`)) continue;
  edgeCountList[b - 1]++;
  graph[a - 1].push(b - 1);
  set.add(`${b} ${a}`);
}

let answer = 0;
const q = [];
for (let i = 0; i < N; i++) {
  if (edgeCountList[i] === 0) {
    q.push(i);
    answer++;
  }
}
while (q.length > 0) {
  const v = q.shift();
  for (let i of graph[v]) {
    if (--edgeCountList[i] === 0) {
      q.push(i);
      answer++;
    }
  }
}
console.log(answer);
