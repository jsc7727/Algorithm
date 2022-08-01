const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2 7`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .split(" ")
  .map((v) => +v);

const MaxSize = 100000 + 1;
const dp = new Array(MaxSize).fill(Infinity);
dp[N] = 0;
const bfs = (a) => {
  const q = [a];
  while (q.length > 0 && dp[M] === Infinity) {
    const n = q.shift();
    const mul = 2 * n;
    const add = n + 1;
    const sub = n - 1;
    if (mul < MaxSize && dp[mul] === Infinity) {
      dp[mul] = dp[n];
      q.unshift(mul);
    }
    if (sub >= 0 && dp[sub] === Infinity) {
      dp[sub] = dp[n] + 1;
      q.push(sub);
    }
    if (add < MaxSize && dp[add] === Infinity) {
      dp[add] = dp[n] + 1;
      q.push(add);
    }
  }
};

bfs(N);
// console.log(dp);
console.log(dp[M]);
