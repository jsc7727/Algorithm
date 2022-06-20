const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
19 20
7
14 12 16 19 16 1 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const crain = input()
  .trim()
  .split(" ")
  .map((v) => +v);
const M = +input();
const boxes = input()
  .trim()
  .split(" ")
  .map((v) => +v);
crain.sort((a, b) => a - b);
boxes.sort((a, b) => a - b);

// console.log(crain);
// console.log(boxes);

if (crain.slice(-1)[0] < boxes.slice(-1)[0]) {
  console.log(-1);
  return;
}

let answer = 0;
while (boxes.length > 0) {
  for (let i = N - 1; i >= 0; i--) {
    for (let j = boxes.length - 1; j >= 0; j--) {
      if (crain[i] >= boxes[j]) {
        boxes.splice(j, 1);
        break;
      }
    }
    // console.log("-", boxes);
  }
  answer++;
  //   console.log("^", boxes);
}
console.log(answer);
