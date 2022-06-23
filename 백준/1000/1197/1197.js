// https://www.acmicpc.net/problem/1197

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 5
    1 4 3
    2 3 3
    4 3 5
    2 1 6
    4 5 9`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [V, E] = input().trim().split(" ").map(Number);

const arr = [];
for (let i = 0; i < E; i++) {
  arr.push(input().trim().split(" ").map(Number));
}

// 1. 정렬한다.
arr.sort((a, b) => a[2] - b[2]);
const parent = new Array(V + 1).fill(null).map((_, idx) => idx);
answer = 0;

const getParent = (x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent[x]));
};

const unionParent = (x, y) => {
  const a = getParent(x);
  const b = getParent(y);
  if (a < b) return (parent[b] = a);
  else return (parent[a] = b);
};

const findParent = (x, y) => {
  const a = getParent(x);
  const b = getParent(y);
  if (a === b) return true;
  else return false;
};
console.log(parent);

for (const [a, b, c] of arr) {
  console.log(parent);
  if (findParent(a, b)) continue;
  answer += c;
  unionParent(a, b);
}
console.log(answer);
