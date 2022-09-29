function solution(n, paths, gates, summits) {
  const graph = new Array(n + 1).fill(null).map((_) => []);
  for (let i = 0; i < paths.length; i++) {
    const [a, b, w] = paths[i];
    graph[a].push([w, b]);
    graph[b].push([w, a]);
  }
  for (let summit of summits) {
    graph[summit] = [];
  }
  let q = gates;
  const dp = new Array(n + 1).fill(Infinity);
  gates.forEach((v) => (dp[v] = -1));
  while (q.length > 0) {
    let set = new Set();
    while (q.length > 0) {
      const qv = q.pop();
      for (let [w, v] of graph[qv]) {
        const maxV = Math.max(dp[qv], w);
        if (dp[v] > maxV) {
          dp[v] = maxV;
          set.add(v);
        }
      }
    }
    q = [...set];
  }

  const res = summits
    .map((v) => [v, dp[v]])
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    });
  return res[0];
}
