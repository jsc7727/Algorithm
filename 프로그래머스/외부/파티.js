function solution(n, t1, t2) {
  var answer = [];
  const graph = new Array(n + 1).fill(null).map((_) => []);
  let visited = new Array(n + 1).fill(false);
  for (let i = 0; i < t1.length; i++) {
    const a = t1[i];
    const b = t2[i];
    graph[a].push(b);
    graph[b].push(a);
  }
  const bfs = (v) => {
    const q = [v];
    visited[v] = true;
    let idx = 0;
    while (q.length > idx) {
      const v = q[idx++];
      for (let g of graph[v]) {
        if (visited[g] === false) {
          visited[g] = true;
          q.push(g);
        }
      }
    }
    return q;
  };
  // console.log(graph)
  for (let i = 1; i <= n; i++) {
    if (visited[i] === false) {
      const res = bfs(i);
      res.sort((a, b) => a - b);
      answer.push(res[(res.length - 1) >> 1]);
    }
  }
  return answer.sort((a, b) => a - b);
}
