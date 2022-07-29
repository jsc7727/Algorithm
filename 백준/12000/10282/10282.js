// https://www.acmicpc.net/problem/10282
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
    3 2 2
    2 1 5
    3 2 5
    3 3 1
    2 1 2
    3 1 8
    3 2 4`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const iter = +input();
for (let i = 0; i < iter; i++) {
  const [n, d, c] = input()
    .trim()
    .split(" ")
    .map((v) => +v);

  const graph = new Array(n + 1).fill(null).map((_) => new Array());
  for (let i = 0; i < d; i++) {
    const [a, b, s] = input()
      .trim()
      .split(" ")
      .map((v) => +v);
    graph[b].push([s, a]);
  }

  const dj = (start) => {
    const dp = new Array(n + 1).fill(Infinity);
    dp[start] = 0;
    const q = [[0, start]];
    while (q.length > 0) {
      const [w, index] = q.shift();
      if (w > dp[index]) {
        continue;
      }
      for (let [targetW, targetIndex] of graph[index]) {
        const sumW = w + targetW;
        if (dp[targetIndex] > sumW) {
          dp[targetIndex] = sumW;
          q.push([sumW, targetIndex]);
        }
      }
    }
    return dp;
  };
  const result = dj(c);
  const temp = [0, 0];
  for (let i of result) {
    if (i !== Infinity) {
      temp[0]++;
      temp[1] = i > temp[1] ? i : temp[1];
    }
  }
  console.log(...temp);
}
