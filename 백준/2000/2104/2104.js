// https://www.acmicpc.net/problem/2104
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
    3 1 6 4 5 2
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input();
const arr = input()
  .trim()
  .split(" ")
  .map((v) => +v);

arr.unshift(Infinity);

const segmentTree = new Array(N * 4).fill([0, 0]);

const init = (node, start, end) => {
  if (start === end) return (segmentTree[node] = [arr[start], start]);
  const middle = Math.floor((start + end) / 2);
  const [leftSum, leftMinIdx] = init(node * 2, start, middle);
  const [rightSum, rightMinIdx] = init(node * 2 + 1, middle + 1, end);
  return (segmentTree[node] = [
    leftSum + rightSum,
    arr[leftMinIdx] < arr[rightMinIdx] ? leftMinIdx : rightMinIdx,
  ]);
};

const getSumAndMinIdx = (node, start, end, left, right) => {
  if (right < start || end < left) return [0, 0];
  if (left <= start && end <= right) return [...segmentTree[node]];
  const middle = Math.floor((start + end) / 2);
  const [leftSum, leftMinIdx] = getSumAndMinIdx(
    node * 2,
    start,
    middle,
    left,
    right
  );
  const [rightSum, rightMinIdx] = getSumAndMinIdx(
    node * 2 + 1,
    middle + 1,
    end,
    left,
    right
  );
  return [
    leftSum + rightSum,
    arr[leftMinIdx] < arr[rightMinIdx] ? leftMinIdx : rightMinIdx,
  ];
};

const getMaxAnswer = (leftIdx, rightIdx) => {
  if (leftIdx === rightIdx) return arr[leftIdx] * arr[leftIdx];
  const [sum, minIdx] = getSumAndMinIdx(1, 1, N, leftIdx, rightIdx);
  let answer = sum * arr[minIdx];
  if (minIdx - 1 >= leftIdx)
    answer = Math.max(answer, getMaxAnswer(leftIdx, minIdx - 1));
  if (minIdx + 1 <= rightIdx)
    answer = Math.max(answer, getMaxAnswer(minIdx + 1, rightIdx));
  return answer;
};

init(1, 1, N);
console.log(getMaxAnswer(1, N));

// const N = +input();
// const A = input().trim().split(" ").map(Number);
// console.log(N, A);
// const solve = (left, right) => {
//   if (left === right) {
//     return A[left] * A[right];
//   }

//   // 중앙을 기준으로 문제를 2가지로 분할하기
//   let mid = parseInt((left + right) / 2);
//   let ret = Math.max(solve(left, mid), solve(mid + 1, right));

//   // 왼쪽과 오른쪽에 모두 포함되는 부분 수열의 경우
//   let start = mid;
//   let end = mid + 1;
//   let min = Math.min(A[start], A[end]); // 최솟값
//   let sum = A[start] + A[end];

//   ret = Math.max(ret, sum * min);

//   while (left < start || end < right) {
//     if (end < right && (start === left || A[start - 1] < A[end + 1])) {
//       end = end + 1;
//       min = Math.min(min, A[end]);
//       sum = sum + A[end];
//     } else {
//       start = start - 1;
//       min = Math.min(min, A[start]);
//       sum = sum + A[start];
//     }
//     ret = Math.max(ret, min * sum);
//   }
//   return ret;
// };

// console.log(solve(0, N - 1));
