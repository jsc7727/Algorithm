const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 4
    ####
    #...
    #.##
    #.J#
    ####`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const [n, m] = input()
  .split(" ")
  .map((v) => +v);

const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input().split(""));
}
// console.log(arr);

const fireMap = arr.map((v) => [...v]);
const findChar = (char) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === char) return [i, j];
    }
  }
  return null;
};

const arrows = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const isValid = (x, y) => 0 <= x && x < n && 0 <= y && y < m;

const fireBfs = () => {
  const fires = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === "F") {
        fires.push([i, j, 0]);
      }
    }
  }
  while (fires.length > 0) {
    const [x, y, cnt] = fires.shift();
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (isValid(xxx, yyy) && fireMap[xxx][yyy] === ".") {
        fireMap[xxx][yyy] = cnt + 1;
        fires.push([xxx, yyy, cnt + 1]);
      }
    }
  }
};

const bfs = (a, b, arr, callBack) => {
  let q = [[a, b, 0]];
  while (q.length > 0) {
    const [x, y, cnt] = q.shift();
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (isValid(xxx, yyy) && arr[xxx][yyy] === ".") {
        if (
          fireMap[xxx][yyy] !== "." &&
          callBack(xxx, yyy, cnt + 1) === true
        ) {
          continue;
        } else {
          arr[xxx][yyy] = cnt + 1;
          q.push([xxx, yyy, cnt + 1]);
        }
      }
    }
  }
};

fireBfs();
// console.log(fireMap);

const J = findChar("J");

arr[J[0]][J[1]] = 0;
bfs(...J, arr, (xxx, yyy, cnt) => (fireMap[xxx][yyy] !== "." fireMap[xxx][yyy] > cnt ? true : false));

// console.log(arr);
let answer = Infinity;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
      if (Number.isInteger(arr[i][j])) {
        answer = Math.min(answer, arr[i][j]);
      }
    }
  }
}
console.log(answer === Infinity ? "IMPOSSIBLE" : answer + 1);
