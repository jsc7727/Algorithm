const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 3
    4 4 4
    4 4 4`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const [D, N] = input()
  .split(" ")
  .map((v) => +v);

const arr1 = input()
  .split(" ")
  .map((v) => +v);

const arr2 = input()
  .split(" ")
  .map((v) => +v);

let size = Infinity;
const arr3 = arr1
  .map((v) => {
    size = Math.min(size, v);
    return size;
  })
  .reverse();

let index = 0;

let fail = false;

for (let i = 0; i < arr2.length; i++) {
  let leftIndex = index;
  for (let j = index; j < arr3.length; j++) {
    if (arr3[j] >= arr2[i]) {
      index = j + 1;
      //   console.log("check", index);
      flag = false;
      break;
    }
  }
  if (leftIndex === index) {
    fail = true;
    break;
  }
}

console.log(fail === true ? 0 : D - index + 1);
