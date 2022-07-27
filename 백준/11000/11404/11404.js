const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
    14
    1 2 2
    1 3 3
    1 4 1
    1 5 10
    2 4 2
    3 4 1
    3 5 1
    4 5 3
    3 5 10
    3 1 8
    1 4 2
    5 1 7
    3 4 2
    5 2 4`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input().trim();
const M = +input().trim();

const arr = new Array(N + 1)
  .fill(null)
  .map((_) => new Array(N + 1).fill(Infinity));

for (let i = 0; i < M; i++) {
  const [a, b, c] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  if (c < arr[a][b]) {
    arr[a][b] = c;
  }
}

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    for (let k = 1; k < N + 1; k++) {
      if (j === k) {
        arr[j][k] = 0;
      } else {
        if (arr[j][i] + arr[i][k] < arr[j][k]) {
          arr[j][k] = arr[j][i] + arr[i][k];
        }
      }
    }
  }
}

let result = "";
for (let i = 1; i < N + 1; i++) {
  const temp = [];
  for (let j = 1; j < N + 1; j++) {
    if (arr[i][j] === Infinity) {
      temp.push(0);
    } else {
      temp.push(arr[i][j]);
    }
  }
  result += temp.join(" ");
  if (i !== N) {
    result += "\n";
  }
}
console.log(result);
