// https://www.acmicpc.net/problem/6549
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `7 2 1 4 5 1 3 3
    4 1000 1000 1000 1000
    0
  `
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

while (true) {
  const arr = input().trim().split(" ").map(Number);
  const N = arr[0];
  if (arr[0] === 0) break;
  arr[0] = [Infinity];

  const segmentTree = new Array(N * 4).fill(0);

  const init = (node, start, end) => {
    if (start === end) return (segmentTree[node] = start);
    const middle = Math.floor((start + end) / 2);
    const leftMinIdx = init(node * 2, start, middle);
    const rightMinIdx = init(node * 2 + 1, middle + 1, end);
    return (segmentTree[node] =
      arr[leftMinIdx] < arr[rightMinIdx] ? leftMinIdx : rightMinIdx);
  };

  const getSumAndMinIdx = (node, start, end, left, right) => {
    if (right < start || end < left) return 0;
    if (left <= start && end <= right) return segmentTree[node];
    const middle = Math.floor((start + end) / 2);
    const leftMinIdx = getSumAndMinIdx(node * 2, start, middle, left, right);
    const rightMinIdx = getSumAndMinIdx(
      node * 2 + 1,
      middle + 1,
      end,
      left,
      right
    );
    return arr[leftMinIdx] < arr[rightMinIdx] ? leftMinIdx : rightMinIdx;
  };

  const getMaxAnswer = (leftIdx, rightIdx) => {
    if (leftIdx === rightIdx) return 1 * arr[leftIdx];
    const minIdx = getSumAndMinIdx(1, 1, N, leftIdx, rightIdx);
    let answer = (rightIdx - leftIdx + 1) * arr[minIdx];
    if (minIdx - 1 >= leftIdx)
      answer = Math.max(answer, getMaxAnswer(leftIdx, minIdx - 1));
    if (minIdx + 1 <= rightIdx)
      answer = Math.max(answer, getMaxAnswer(minIdx + 1, rightIdx));
    return answer;
  };

  init(1, 1, N);
  console.log(getMaxAnswer(1, N));
}
