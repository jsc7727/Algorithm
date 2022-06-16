const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    -2 4 -99 -1 98`
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
arr.sort((a, b) => {
  if (a < 0 && b < 0) {
    return Math.abs(b) - Math.abs(a);
  } else {
    return a - b;
  }
});
// console.log(arr);
let left = 0;
let right = arr.length - 1;
let answer = [Infinity, Infinity];
while (left < right) {
  sum = arr[left] + arr[right];
  if (sum === 0) {
    answer = [arr[left], arr[right]];
    break;
  } else if (sum > 0) {
    if (Math.abs(answer[0] + answer[1]) > Math.abs(sum)) {
      answer = [arr[left], arr[right]];
    }
    right -= 1;
  } else {
    if (Math.abs(answer[0] + answer[1]) > Math.abs(sum)) {
      answer = [arr[left], arr[right]];
    }
    left += 1;
  }
}
console.log(...answer);
