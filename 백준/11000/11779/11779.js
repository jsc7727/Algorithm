const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
    3
    1 2 5
    1 2 3
    2 3 1
    1 3`
).split("\n");

class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.array = [];
    this.comparator = (i1, i2) => {
      const value = comparator(this.array[i1], this.array[i2]);
      if (Number.isNaN(value)) {
        throw new Error(
          `Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`
        );
      }
      return value;
    };
  }

  /**
   * Insert element
   * @runtime O(log n)
   * @param {any} value
   */
  add(value) {
    this.array.push(value);
    this.bubbleUp();
  }

  /**
   * Retrieves, but does not remove, the head of this heap
   * @runtime O(1)
   */
  peek() {
    return this.array[0];
  }

  /**
   * Retrieves and removes the head of this heap, or returns null if this heap is empty.
   * @runtime O(log n)
   */
  remove(index = 0) {
    if (!this.size) return null;
    this.swap(index, this.size - 1); // swap with last
    const value = this.array.pop(); // remove element
    this.bubbleDown(index);
    return value;
  }

  /**
   * Returns the number of elements in this collection.
   * @runtime O(1)
   */
  get size() {
    return this.array.length;
  }

  /**
   * Move new element upwards on the heap, if it's out of order
   * @runtime O(log n)
   */
  bubbleUp() {
    let index = this.size - 1;
    const parent = (i) => Math.ceil(i / 2 - 1);
    while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
      this.swap(parent(index), index);
      index = parent(index);
    }
  }

  /**
   * After removal, moves element downwards on the heap, if it's out of order
   * @runtime O(log n)
   */
  bubbleDown(index = 0) {
    let curr = index;
    const left = (i) => 2 * i + 1;
    const right = (i) => 2 * i + 2;
    const getTopChild = (i) =>
      right(i) < this.size && this.comparator(left(i), right(i)) > 0
        ? right(i)
        : left(i);

    while (
      left(curr) < this.size &&
      this.comparator(curr, getTopChild(curr)) > 0
    ) {
      const next = getTopChild(curr);
      this.swap(curr, next);
      curr = next;
    }
  }

  /**
   * Swap elements on the heap
   * @runtime O(1)
   * @param {number} i1 index 1
   * @param {number} i2 index 2
   */
  swap(i1, i2) {
    [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
  }
}

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = +input().trim();
const M = +input().trim();

const arr = new Array(N + 1).fill(null).map((_) => new Array());
const hash = {};

for (let i = 0; i < M; i++) {
  const [s, e, w] = input()
    .trim()
    .split(" ")
    .map((v) => +v);

  if (hash.hasOwnProperty(`${s} ${e}`)) {
    if (hash[`${s} ${e}`] > w) {
      hash[`${s} ${e}`] = w;
    }
  } else {
    hash[`${s} ${e}`] = w;
  }
}

for (let i of Object.entries(hash)) {
  const [s, e] = i[0].split(" ").map((v) => +v);
  const w = i[1];
  arr[s].push([w, e]);
}
// console.log(hash);

const [start, end] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const dijkstra = (start) => {
  const dp = new Array(N + 1).fill(null).map((_) => [Infinity, 0]);
  dp[start][0] = 0;
  const hq = new Heap((a, b) => a[0] - b[0]);
  hq.add([0, start]);
  while (hq.size > 0) {
    const [w, e] = hq.remove();

    for (let [arrW, arrE] of arr[e]) {
      if (dp[arrE][0] < arrW) continue;
      const sumW = arrW + w;
      if (dp[arrE][0] > sumW) {
        dp[arrE][0] = sumW;
        dp[arrE][1] = e;
        hq.add([sumW, arrE]);
      }
    }
  }
  return dp;
};

const result = dijkstra(start);

const answer = [end];
const recv = (idx) => {
  answer.push(result[idx][1]);
  if (result[idx][1] === start) {
    return;
  } else {
    recv(result[idx][1]);
  }
};
recv(end);
console.log(result[end][0]);
console.log(answer.length);
console.log(...answer.reverse());
