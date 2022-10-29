function solution(n, lighthouse) {
  const graph = new Array(n + 1).fill(null).map((_) => new Array());
  const visited = new Array(n + 1).fill(false);
  for (let [a, b] of lighthouse) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const dfs = (idx) => {
    visited[idx] = true;
    let p = 1;
    let np = 0;
    for (let nIdx of graph[idx]) {
      if (visited[nIdx]) continue;
      const [resP, resNp] = dfs(nIdx);
      p += Math.min(resP, resNp);
      np += resP;
    }
    return [p, np];
  };
  return Math.min(...dfs(1));
}

const res = solution(9, [
  [1, 2],
  [2, 3],
  [3, 4],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
]);

console.log(res);
