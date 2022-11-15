function solution(n, results) {
  let answer = 0;
  const winGraph = new Array(n + 1).fill(null).map((_) => []);
  const loseGraph = new Array(n + 1).fill(null).map((_) => []);
  for (let [A, B] of results) {
    winGraph[A].push(B);
    loseGraph[B].push(A);
  }
  const dfs = (graph, visited, n) => {
    let cnt = 1;
    for (let i of graph[n]) {
      if (visited[i] === false) {
        visited[i] = true;
        cnt += dfs(graph, visited, i);
      }
    }
    return cnt;
  };
  for (let i = 1; i <= n; i++) {
    let visited = new Array(n + 1).fill(false);
    const winCnt = dfs(winGraph, visited, i);
    const loseCnt = dfs(loseGraph, visited, i);
    if (winCnt + loseCnt - 1 === n) answer++;
  }
  return answer;
}
