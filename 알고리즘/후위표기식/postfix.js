// https://www.acmicpc.net/problem/1918
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `( 2.5 + 3.156 * 4 ) % 5`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const changeInfixToPostfix = (infixList) => {
  let stack = [];
  let answer = [];

  for (let cur of infixList) {
    if (cur === "(") {
      stack.push(cur);
    } else if (cur === "*" || cur === "/" || cur === "%") {
      while (
        (stack.length && stack[stack.length - 1] === "*") ||
        stack[stack.length - 1] === "/" ||
        stack[stack.length - 1] === "%"
      ) {
        answer.push(stack.pop());
      }
      stack.push(cur);
    } else if (cur === "+" || cur === "-") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        answer.push(stack.pop());
      }
      stack.push(cur);
    } else if (cur === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        answer.push(stack.pop());
      }
      stack.pop();
    } else {
      answer.push(cur);
    }
  }
  return answer.concat(stack.reverse());
};

const postfixCalc = (calcList) => {
  const stack = [];
  const getLeftRightFromStack = () => stack.splice(stack.length - 2, 2);
  for (let cur of calcList) {
    if (cur === "*") {
      const [left, right] = getLeftRightFromStack();
      stack.push(left * right);
    } else if (cur === "/") {
      const [left, right] = getLeftRightFromStack();
      stack.push(left / right);
    } else if (cur === "+") {
      const [left, right] = getLeftRightFromStack();
      stack.push(left + right);
    } else if (cur === "-") {
      const [left, right] = getLeftRightFromStack();
      stack.push(left - right);
    } else if (cur === "%") {
      const [left, right] = getLeftRightFromStack();
      stack.push(left % right);
    } else {
      stack.push(Number(cur));
    }
  }
  return stack[0];
};

const postfix = changeInfixToPostfix(input().split(" "));
console.log(postfix);
const res = postfixCalc(postfix);
console.log(res);
