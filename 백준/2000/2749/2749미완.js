const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const c = Number(input());

const N = 1000000;
const P = (N / 10) * 15;

const arr = new Array(P + 1).fill(0);
arr[1] = 1;
for (let i = 2; i <= P; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % N;
}

console.log(arr[c % P]);
