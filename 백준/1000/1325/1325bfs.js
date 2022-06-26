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
  .split(" ")
  .map((v) => +v);

const dic = new Array(N + 1).fill(null).map((_) => []);
for (let i = 0; i < M; i++) {
  const [a, b] = input().split(" ");
  dic[b].push(a);
}
console.log(dic);
const bfs = (v) => {
  let visited = new Array(N + 1).fill(false);
  let count = 0;
  let index = 0;
  let q = [v];
  while (q.length > index) {
    const x = q[index++];
    for (let i of dic[x]) {
      if (visited[i] === false) {
        visited[i] = true;
        q.push(i);
        count++;
      }
    }
  }
  return count;
};

let result = [];
let max = 0;
for (let i = 0; i < N + 1; i++) {
  const count = bfs(i);
  if (count > max) {
    max = count;
    result = [i];
  } else if (count === max) {
    result.push(i);
  }
}

console.log(result.join(" "));
