// https://www.acmicpc.net/problem/1918
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `( A * ( B + C )) - D`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const data = input().replaceAll(" ", "").split("");
// console.log(data);

const change = (stack) => {
  const stack2 = [];
  for (let i = 0; i < stack.length; i++) {
    stack2.push(stack[i]);
    if (stack.length > 2 && (stack[i - 1] === "*" || stack[i - 1] === "/")) {
      const right = stack2.pop();
      const op = stack2.pop();
      const left = stack2.pop();
      stack2.push([left, right, op].join(""));
    }
  }
  const stack3 = [];
  for (let i = 0; i < stack2.length; i++) {
    stack3.push(stack2[i]);
    if (stack2.length > 2 && (stack2[i - 1] === "+" || stack2[i - 1] === "-")) {
      const right = stack3.pop();
      const op = stack3.pop();
      const left = stack3.pop();
      stack3.push([left, right, op].join(""));
    }
  }
  return stack3.join("");
};

const stack = [];
for (let i = 0; i < data.length; i++) {
  if (data[i] === ")") {
    const temp = [];
    while (true) {
      const left = stack.pop();
      if (left === "(") break;
      else temp.push(left);
    }
    stack.push(change(temp.reverse()));
  } else {
    stack.push(data[i]);
  }
  // console.log(stack.join(" "));
}

// console.log(stack);
// console.log(stack2);
const res = change(stack);
console.log(res);
