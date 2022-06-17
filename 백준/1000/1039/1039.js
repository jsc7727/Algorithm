const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `100 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let data = input().trim().split(" ");
const [N, K] = [data[0].split(""), +data[1]];

let max = -1;

let visited = new Array(K + 1)
  .fill(null)
  .map((_) => new Array(1000000 + 1).fill(false));

const dfs = (count = 0) => {
  // console.log(count);
  const sum = +N.join("");
  if (visited[count][sum] === true) {
    return;
  }
  if (count === K) {
    if (sum > max) {
      max = sum;
    }
    return;
  }
  for (let i = 0; i < N.length - 1; i++) {
    for (let j = i + 1; j < N.length; j++) {
      swap(i, j);
      if (N[0] !== "0") {
        dfs(count + 1);
      }
      swap(i, j);
    }
  }
  visited[count][sum] = true;
};

const swap = (i, j) => {
  [N[i], N[j]] = [N[j], N[i]];
};

dfs();
console.log(max);
