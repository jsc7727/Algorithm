const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
    0 0
    0 10
    10 10
    10 0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();

const points = [];
for (let i = 0; i < N; i++) {
  points.push(
    input()
      .trim()
      .split(" ")
      .map((v) => +v)
  );
}
const ccw = (x1, x2, x3, y1, y2, y3) => {
  const a = x1 * y2 + x2 * y3 + x3 * y1;
  const b = y1 * x2 + y2 * x3 + y3 * x1;
  return (a - b) / 2;
};
let answer = 0;
for (let i = 1; i < N; i++) {
  answer += ccw(
    points[0][0],
    points[i - 1][0],
    points[i][0],
    points[0][1],
    points[i - 1][1],
    points[i][1]
  );
}
console.log((Math.round(Math.abs(answer) * 10) / 10).toFixed(1));
