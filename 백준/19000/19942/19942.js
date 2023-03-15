const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
    100 70 90 10
    30 55 10 8 100
    60 10 10 2 70
    10 80 50 0 50
    40 30 30 8 60
    60 10 70 2 120
    20 70 50 4 4
`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const n = +input();

const minVitamin = input()
  .split(" ")
  .map((v) => +v);

const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(
    input()
      .split(" ")
      .map((v) => +v)
  );
}

const addVitamin = (vitamin, index) => {
  for (let i = 0; i < 4; i++) {
    vitamin[i] += arr[index][i];
  }
};
const subVitamin = (vitamin, index) => {
  for (let i = 0; i < 4; i++) {
    vitamin[i] -= arr[index][i];
  }
};
const checkVitamin = (vitamin) => {
  for (let i = 0; i < 4; i++) {
    if (vitamin[i] < minVitamin[i]) return false;
  }
  return true;
};

let min = Infinity;
let result = [];

const dfs = (index = 0, vitamin = [0, 0, 0, 0], cost = 0, answer = []) => {
  if (min > cost && checkVitamin(vitamin)) {
    min = cost;
    result = answer.join(" ");
    return;
  }
  if (index === n) {
    return;
  }
  for (let i = index; i < n; i++) {
    addVitamin(vitamin, i);
    answer.push(i + 1);
    dfs(i + 1, vitamin, cost + arr[i][4], answer);
    answer.pop();
    subVitamin(vitamin, i);
  }
};

dfs();

if (min === Infinity) {
  console.log(-1);
} else {
  console.log(min);
  console.log(result);
}
