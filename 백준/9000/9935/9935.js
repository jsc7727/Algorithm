//https://www.acmicpc.net/problem/9935

const fs = require('fs');

const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `12ab112ab2ab
    12ab
`
).split('\n');

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

let str = input();
let checkStr = input();

const stack = [];

for (let i of str) {
  stack.push(i);
  if (stack.length >= checkStr.length) {
    const check = stack.slice(stack.length - checkStr.length);
    if (check.join('') === checkStr) {
      stack.splice(-checkStr.length, checkStr.length);
    }
  }
}
if (stack.length === 0) {
  console.log('FRULA');
} else {
  console.log(stack.join(''));
}
