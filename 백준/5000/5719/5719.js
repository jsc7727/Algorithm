const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
    5
    20 3 14 6 7 8 18 10 12 15
    `
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

while (true) {
  const [N, M] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  if (N === 0 && M === 0) break;
  const [start, end] = input()
    .trim()
    .split(" ")
    .map((v) => +v);
  const graph = new Array(N).fill(null).map((_) => []);
  const graphReverse = new Array(N).fill(null).map((_) => []);
  for (let i = 0; i < M; i++) {
    const [a, b, w] = input()
      .trim()
      .split(" ")
      .map((v) => +v);
    graph[a].push([w, b]);
    graphReverse[b].push([w, a]);
  }
  const dijkstra = (start, graph, checkList) => {
    const q = new Heap((a, b) => a[0] - b[0]);
    q.add([0, start]);
    const dp = new Array(N).fill(Infinity);
    dp[start] = 0;
    while (q.size > 0) {
      const [prevW, v] = q.remove();
      if (dp[v] < prevW) continue;
      for (let [w, i] of graph[v]) {
        if (checkList[i][v] === true) continue;
        const sumW = prevW + w;
        if (dp[i] > sumW) {
          dp[i] = sumW;
          q.add([sumW, i]);
        }
      }
    }
    return dp;
  };
  const visited = new Array(N).fill(false);
  const checkList = new Array(N)
    .fill(null)
    .map((_) => new Array(N).fill(false));
  const res = dijkstra(start, graph, checkList);
  const bfs = (point) => {
    const q = [point];
    while (q.length > 0) {
      const v = q.shift();
      for (let [w, c] of graphReverse[v]) {
        if (visited[c] === false && res[v] === res[c] + w) {
          if (c !== start) {
            visited[c] = true;
          }
          checkList[v][c] = true;
          q.push(c);
        }
      }
    }
  };
  bfs(end);
  const res2 = dijkstra(start, graph, checkList);
  console.log(res2[end] === Infinity ? -1 : res2[end]);
}
