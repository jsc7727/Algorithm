// https://www.acmicpc.net/problem/10986
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 3
    1 2 3 1 2
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const arr = input().trim().split(" ");

let cache = new Array(M).fill(0);
let sum = 0;
for (let i = 0; i < N; i++) {
  sum = sum + +arr[i];
  cache[sum % M]++;
}

let answer = cache[0];

for (let i = 0; i < M; i++) {
  answer += (cache[i] * Math.floor(cache[i] - 1)) / 2;
}
console.log(answer);
