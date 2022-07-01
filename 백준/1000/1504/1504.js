const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 6
    1 2 3
    2 3 3
    3 4 1
    1 3 5
    2 4 5
    1 4 4
    2 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(qElement) {
    let isContain = false;
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i][0] > qElement[0]) {
        this.queue.splice(i, 0, qElement);
        isContain = true;
        break;
      }
    }
    if (!isContain) {
      this.queue.push(qElement);
    }
  }
  dequeue() {
    if (!this.isEmpty()) return this.queue.shift();
  }
  front() {
    if (!this.isEmpty()) return this.queue[0];
  }
  rear() {
    if (!this.isEmpty()) return this.queue[this.queue.length - 1];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}

const [N, E] = input()
  .trim()
  .split(" ")
  .map((v) => +v);
// console.log(N, E);
const arr = new Array(N + 1).fill(null).map((_) => new Array());
for (let i = 0; i < E; i++) {
  const [a, b, c] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  arr[a].push([b, c]);
  arr[b].push([a, c]);
}

const [v1, v2] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

// console.log(arr);

const pq = new PriorityQueue();
const dijkstra = (startVertex) => {
  const dp = new Array(N + 1).fill(Infinity);
  dp[startVertex] = 0;
  pq.enqueue([0, startVertex]);
  while (!pq.isEmpty()) {
    const [pqW, pqV] = pq.dequeue();
    for (let [arrV, arrW] of arr[pqV]) {
      const totalW = pqW + arrW;
      if (totalW < dp[arrV]) {
        dp[arrV] = totalW;
        pq.enqueue([totalW, arrV]);
      }
    }
  }
  return dp;
};

const resStart = dijkstra(1);
const resV1 = dijkstra(v1);
const resV2 = dijkstra(v2);

const result = Math.min(
  resStart[v1] + resV1[v2] + resV2[N],
  resStart[v2] + resV2[v1] + resV1[N]
);
if (result === Infinity) {
  console.log(-1);
} else {
  console.log(result);
}
