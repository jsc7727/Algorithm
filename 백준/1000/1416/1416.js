const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6 2
    3 4 5 6 11 -1`
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
console.log(arr);
