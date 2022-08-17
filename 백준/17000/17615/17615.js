const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `8
    RRBBBBRB
    `
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = input().trim().split("");
let R = 0;
let B = 0;
for (let i = 0; i < N; i++) {
  if (arr[i] === "R") {
    R++;
  }
  if (arr[i] === "B") {
    B++;
  }
}

let leftR = { count: R, color: "R" };
let leftB = { count: B, color: "B" };

for (let i = 0; i < N; i++) {
  if (arr[i] === arr[0]) {
    if (arr[i] === leftR.color) {
      leftR.count--;
    }
    if (arr[i] === leftB.color) {
      leftB.count--;
    }
  } else {
    break;
  }
}
let rightR = { count: R, color: "R" };
let rightB = { count: B, color: "B" };
for (let i = N - 1; i >= 0; i--) {
  if (arr[i] === arr[N - 1]) {
    if (arr[i] === rightR.color) {
      rightR.count--;
    }
    if (arr[i] === rightB.color) {
      rightB.count--;
    }
  } else {
    break;
  }
}
// console.log(leftR);
// console.log(leftB);
// console.log(rightR);
// console.log(rightB);

console.log(
  Math.min(R, B, leftR.count, leftB.count, rightR.count, rightB.count)
);
