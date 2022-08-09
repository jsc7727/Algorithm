// https://www.acmicpc.net/problem/17298
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    3 5 2 7
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = input()
  .trim()
  .split(" ")
  .map((v) => +v);
let stack = [0];
const answer = new Array(N).fill(-1);
for (let i = 1; i < N; i++) {
  while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
    answer[stack.pop()] = arr[i];
  }
  stack.push(i);
}
console.log(...answer);
