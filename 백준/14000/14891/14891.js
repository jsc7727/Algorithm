const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10101111
    01111101
    11001110
    00000010
    2
    3 -1
    1 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const arr = [];
for (let i = 0; i < 4; i++) {
  arr.push(
    input()
      .trim()
      .split("")
      .map((v) => +v)
  );
}
// for (let i of arr) console.log(i.join(""));
// console.log("start");
const N = +input();

let visited = [];

const lotate = (index, direction) => {
  if (direction === 1) {
    arr[index].unshift(arr[index].pop());
  } else {
    arr[index].push(arr[index].shift());
  }
};

const isValid = (x) => 0 <= x && x < 4;
const lotateMove = (index, direction) => {
  visited[index] = true;
  const [top, bottom] = [index - 1, index + 1];
  if (isValid(top) && visited[top] === false) {
    if (arr[index][6] !== arr[top][2]) {
      lotateMove(top, direction * -1);
    }
  }
  if (isValid(bottom) && visited[bottom] === false) {
    if (arr[bottom][6] !== arr[index][2]) {
      lotateMove(bottom, direction * -1);
    }
  }

  //   console.log(index, direction);
  lotate(index, direction);
  //   for (let i of arr) console.log(i.join(""));
  //   console.log();
};

for (let i = 0; i < N; i++) {
  const command = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  visited = new Array(4).fill(false);
  lotateMove(command[0] - 1, command[1]);
  //   console.log("----------");
}
const calc = () => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 1) {
      count += 2 ** i;
    }
  }
  return count;
};
console.log(calc());
