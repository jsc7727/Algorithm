// https://www.acmicpc.net/problem/1394

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `bca
    bbc`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const arr = input().trim().split("");
const data = input().trim().split("");
const dic = {};
let cnt = 0;
let g = 1;
let ans = 0;

for (let i of arr) {
  dic[i] = ++cnt;
}
for (i = data.length - 1; i >= 0; i--) {
  ans = (ans + g * dic[data[i]]) % 900528;
  g = (g * cnt) % 900528;
}
console.log(ans);
