const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `8
    1 8
    3 9
    2 2
    4 1
    6 4
    10 10
    9 7
    7 6`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(
    input()
      .trim()
      .split(" ")
      .map((v) => +v)
  );
}
arr.sort((a, b) => a[1] - b[1]);

function CeilIndex(arr, l, r, key) {
  while (r - l > 1) {
    var m = l + (((r - l) / 2) >> 0);
    if (arr[m][0] >= key[0]) r = m;
    else l = m;
  }
  return r;
}
console.log([1,2,3])
const answer = [1];
function LIS(arr, size) {
  let tailTable = [-1];
  for (var i = 0; i < size; i++) {
    if (arr[i][0] > tailTable[tailTable.length - 1][0]) {
      tailTable.push(arr[i]);
    } else {
      tailTable[CeilIndex(tailTable, -1, tailTable.length - 1, arr[i])] =
        arr[i];
    }
  }
  return tailTable.length;
}

const res = LIS(arr, N);
console.log(N - res);
console.log(answer);

// let max = -1;
// let temp = [];
// for (let i = answer.length - 1; i >= 0; i--) {
//   if (answer[i] > max) {
//     max = answer[i];
//   } else {
//     temp.push(arr[i][0]);
//   }
// }
// console.log(temp.sort((a, b) => a - b).join("\n"));
