class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.array = [];
    this.comparator = (i1, i2) => {
      const value = comparator(this.array[i1], this.array[i2]);
      return value;
    };
  }

  add(value) {
    this.array.push(value);
    this.bubbleUp();
  }

  peek() {
    return this.array[0];
  }

  remove(index = 0) {
    if (!this.size) return null;
    this.swap(index, this.size - 1); // swap with last
    const value = this.array.pop(); // remove element
    this.bubbleDown(index);
    return value;
  }

  get size() {
    return this.array.length;
  }

  bubbleUp() {
    let index = this.size - 1;
    const parent = (i) => Math.ceil(i / 2 - 1);
    while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
      this.swap(parent(index), index);
      index = parent(index);
    }
  }

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

  swap(i1, i2) {
    [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
  }
}

function solution(n, s, a, b, fares) {
  const graph = new Array(n + 1).fill(null).map((_) => []);
  for (let [x, y, w] of fares) {
    graph[x].push([w, y]);
    graph[y].push([w, x]);
  }

  const dijkstra = (p) => {
    const dp = new Array(n + 1).fill(Infinity);
    const pq = new Heap((a, b) => a[0] - b[0]);
    dp[p] = 0;
    pq.add([0, p]);
    while (pq.size > 0) {
      const [pqW, pqV] = pq.remove();
      if (dp[pqV] < pqW) continue;
      for (let [gpW, gpV] of graph[pqV]) {
        const sum = gpW + pqW;
        if (dp[gpV] > sum) {
          dp[gpV] = sum;
          pq.add([sum, gpV]);
        }
      }
    }
    return dp;
  };

  const dpS = dijkstra(s);
  const dpA = dijkstra(a);
  const dpB = dijkstra(b);
  let answer = Infinity;
  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, dpS[i] + dpA[i] + dpB[i]);
  }
  return answer;
}
