// https://www.acmicpc.net/problem/1388
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 5
    0 0 0 2 0
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

const arr = input()
  .trim()
  .split(" ")
  .map((v) => +v);

// console.log(N, M);
// console.log(arr);

let water = 0;
for (let i = 1; i < M - 1; i++) {
  const leftMax = Math.max(...arr.slice(0, i));
  const rightMax = Math.max(...arr.slice(i + 1));
  water += Math.max(Math.min(leftMax, rightMax) - arr[i], 0);
}
console.log(water);
