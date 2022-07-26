const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    1 3
    1 5
    2 4
    3 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = [];
for (let i = 0; i < N; i++) {
  const [a, b] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  arr.push([a, 1]);
  arr.push([b, -1]);
}

let answer = 0;
let classroom = 0;

arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

for (let i of arr) {
  classroom += i[1];
  answer = classroom > answer ? classroom : answer;
}
console.log(answer);
