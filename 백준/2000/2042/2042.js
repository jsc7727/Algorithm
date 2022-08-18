// https://www.acmicpc.net/problem/2042
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 2 2
    1
    2
    3
    4
    5
    1 3 6
    2 2 5
    1 5 2
    2 3 5
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M, K] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const arr = [];
const segmentTree = new Array(N * 4).fill(0);
for (let i = 0; i < N; i++) {
  arr.push(BigInt(input()));
}

const makeSegmentTree = (node, start, end) => {
  if (start === end) return (segmentTree[node] = arr[start]);
  const middle = Math.floor((start + end) / 2);
  const leftResult = makeSegmentTree(node * 2, start, middle);
  const rightResult = makeSegmentTree(node * 2 + 1, middle + 1, end);
  return (segmentTree[node] = BigInt(leftResult) + BigInt(rightResult));
};
const segmentTreeSum = (node, start, end, left, right) => {
  if (left > end || right < start) return 0;
  if (left <= start && right >= end) return segmentTree[node];
  const middle = Math.floor((start + end) / 2);
  const LeftSum = segmentTreeSum(node * 2, start, middle, left, right);
  const rightSum = segmentTreeSum(node * 2 + 1, middle + 1, end, left, right);
  return BigInt(LeftSum) + BigInt(rightSum);
};
const updateSegmentNode = (node, start, end, index, diff) => {
  if (index < start || index > end) return;
  segmentTree[node] += diff;
  if (start !== end) {
    const middle = Math.floor((start + end) / 2);
    updateSegmentNode(node * 2, start, middle, index, diff);
    updateSegmentNode(node * 2 + 1, middle + 1, end, index, diff);
  }
};
makeSegmentTree(1, 0, N - 1);
const answer = [];
for (let i = 0; i < M + K; i++) {
  const [a, b, c] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  if (a === 1) {
    const diff = BigInt(c) - arr[b - 1];
    arr[b - 1] = BigInt(c);
    updateSegmentNode(1, 0, N - 1, b - 1, diff);
    // console.log(segmentTree);
  } else {
    answer.push(segmentTreeSum(1, 0, N - 1, b - 1, c - 1));
  }
}
console.log(answer.join("\n"));
