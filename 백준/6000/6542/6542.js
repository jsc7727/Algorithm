// https://www.acmicpc.net/problem/6542
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 2 1 4 5 1 3 3
    4 1000 1000 1000 1000
    0
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while (true) {
  const arr = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  if (arr[0] === 0) break;

  console.log(arr);
  const stack = [1];
  let answer = arr[1];
  for (let i = 2; i <= arr.length; i++) {
    console.log(stack, answer);
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      let temp = stack[stack.length - 1];
      stack.pop();
      console.log(
        arr[temp] *
          (i -
            (stack[stack.length - 1] === undefined
              ? 0
              : stack[stack.length - 1]) -
            1)
      );
      answer = Math.max(
        answer,
        arr[temp] *
          (i -
            (stack[stack.length - 1] === undefined
              ? 0
              : stack[stack.length - 1]) -
            1)
      );
    }
    stack.push(i);
  }
  console.log(answer);
}
