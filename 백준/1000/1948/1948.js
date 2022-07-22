const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7
    9
    1 2 4
    1 3 2
    1 4 3
    2 6 3
    2 7 5
    3 5 1
    4 6 4
    5 6 2
    6 7 5
    1 7`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const M = +input();

const edgeCount = new Array(N + 1).fill(0);
edgeCount[0] = -1;
const graph = new Array(N + 1).fill(null).map((_) => []);
const graphReverse = new Array(N + 1).fill(null).map((_) => []);
for (let i = 0; i < M; i++) {
  const [a, b, w] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  graph[a].push([w, b]);
  edgeCount[b]++;
  graphReverse[b].push([w, a]);
}

const [start, end] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const q = [];
q.push(start);

const dpSum = new Array(N + 1).fill(0);
while (q.length > 0) {
  const v = q.shift();
  for (let [w, i] of graph[v]) {
    if (--edgeCount[i] === 0) {
      q.push(i);
    }
    const sumW = dpSum[v] + w;
    if (sumW > dpSum[i]) {
      dpSum[i] = sumW;
    }
  }
}

const qq = [end];
const set = new Set();
while (qq.length > 0) {
  const v = qq.shift();
  for (let [w, i] of graphReverse[v]) {
    if (dpSum[i] + w === dpSum[v] && !set.has(`${v} ${i}`)) {
      qq.push(i);
      set.add(`${v} ${i}`);
    }
  }
}

console.log(dpSum[N]);
console.log(set.size);
