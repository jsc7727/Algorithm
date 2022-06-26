// 미완
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 4
    3 1
    3 2
    4 3
    5 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const dic = new Array(N + 1).fill(null).map((_) => []);
for (let i = 0; i < M; i++) {
  const [value, key] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  dic[+key].push(value);
}
console.log(dic);

const visited = new Array(N + 1).fill(false);
const visitedClear = () => {
  for (let i = 0; i < visited.length; i++) {
    visited[i] = false;
  }
};

const checkCount = new Array(N + 1).fill(0);
let max = 0;

const dfs = (v, count = 1) => {
  console.log(v, count, visited);
  visited[v] = true;
  if (count > max) {
    max = count;
  }

  for (let key of dic[v]) {
    if (visited[key] === false) {
      checkCount[key]++;
      dfs(key, count + 1);
    }
  }
};

for (let key = 1; key <= N; key++) {
  visited[key] = true;
  checkCount[key]++;
  dfs(key);
  console.log(checkCount);
  console.log(max);
  visitedClear();
}

console.log(checkCount);
const result = [];
for (let i = 0; i < checkCount.length; i++) {
  if (checkCount[i] === max) result.push(i);
}
console.log(result.join(" "));
