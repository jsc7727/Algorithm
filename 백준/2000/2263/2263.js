const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
    1 2 3
    1 3 2`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();

const inOrder = input()
  .trim()
  .split(" ")
  .map((v) => +v);
const postOrder = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const preOrder = [];

const recv = (left, right) => {
  if (left >= right) {
    return;
  }
  const idx = inOrder.indexOf(postOrder[right]);
  console.log(idx);
  recv(left, idx - 1);
  recv(idx + 1, right);
};

recv(0, N - 1);

console.log(preOrder);
