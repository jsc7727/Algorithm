// https://www.acmicpc.net/problem/15558

const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 3
    1110110
    1011001
`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const [N, K] = input()
  .split(" ")
  .map((v) => +v);

const arr1 = input()
  .split("")
  .map((v) => +v);

const arr2 = input()
  .split("")
  .map((v) => +v);

const arr = [arr1, arr2];

const bfs = () => {
  let q = [[0, 0]];
  let count = 0;
  while (q.length > 0) {
    const newQ = [];
    for (let [line, index] of q) {
      //   console.log(line, index);
      // 앞으로 한칸
      if (index + 1 >= N || index + K >= N) return 1;
      if (arr[line][index + 1] === 1) {
        arr[line][index + 1] = 0;
        newQ.push([line, index + 1]);
      }

      // 뒤로 한칸
      if (index - 1 > count && arr[line][index - 1] === 1) {
        arr[line][index - 1] = 0;
        newQ.push([line, index - 1]);
      }

      // k칸 다른줄 앞으로
      const jumpLine = line === 0 ? 1 : 0;
      if (arr[jumpLine][index + K] === 1) {
        arr[jumpLine][index + K] = 0;
        newQ.push([jumpLine, index + K]);
      }
    }
    q = newQ;
    count++;
  }
  return 0;
};
// const bfs = () => {
//   const q = [[0, 0, 0, 0]];
//   while (q.length > 0) {
//     const [count, line, index, type] = q.shift();
//     // console.log("count", count, "line", line, "index", index, "type", type);
//     if (index >= N) {
//       console.log(count);
//       return 1;
//     } else {
//       // 앞으로 한칸
//       if (index + 1 >= N) {
//         return 1;
//       } else if (arr[line][index + 1] === 1) {
//         q.push([count + 1, line, index + 1, 1]);
//       }

//       // 뒤로 한칸
//       if (index - 1 > count && arr[line][index - 1] === 1) {
//         q.push([count + 1, line, index - 1, -1]);
//       }

//       // k칸 다른줄 앞으로
//       const jumpLine = line === 0 ? 1 : 0;
//       if (index + K >= N) {
//         return 1;
//       } else if (arr[jumpLine][index + K] === 1) {
//         q.push([count + 1, jumpLine, index + K, K]);
//       }
//     }
//   }
//   return 0;
// };

const result = bfs();
console.log(result);
