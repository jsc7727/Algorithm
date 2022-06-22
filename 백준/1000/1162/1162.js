const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 6 1
    4 3 3 
    3 1 3 
    2 1 3 
    2 4 200 
    3 2 300 
    1 2 200`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M, K] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const arr = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const [a, b, c] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  arr[a].push([c, b]);
  arr[b].push([c, a]);
}

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

const pq = new Heap((a, b) => a[0] - b[0]);

const dijkstra = (start) => {
  const dp = new Array(N + 1)
    .fill(null)
    .map((_) => new Array(K + 1).fill(Infinity));

  dp[start][0] = 0;
  pq.add([0, start, 0]);
  while (pq.size > 0) {
    const [pqW, pqV, pqPavedRoad] = pq.remove();
    if (dp[pqV][pqPavedRoad] < pqW) continue;
    for (let [arrW, arrV] of arr[pqV]) {
      const totalW = arrW + pqW;
      if (totalW < dp[arrV][pqPavedRoad]) {
        dp[arrV][pqPavedRoad] = totalW;
        pq.add([totalW, arrV, pqPavedRoad]);
      }

      if (pqPavedRoad + 1 <= K && pqW < dp[arrV][pqPavedRoad + 1]) {
        dp[arrV][pqPavedRoad + 1] = pqW;
        pq.add([pqW, arrV, pqPavedRoad + 1]);
      }
    }
  }
  return dp;
};

const [start, destination] = [1, N];
const result = dijkstra(start);
console.log(Math.min(...result[destination]));
