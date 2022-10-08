function solution(info, edges) {
  const graph = new Array(info.length).fill(null).map((_) => []);
  const visited = new Set();

  for (let [a, b] of edges) {
    graph[a].push(b);
  }

  const dfs = (idx, sheep = 0, wolf = 0, arr = [0]) => {
    if (info[idx] === 0) sheep++;
    else wolf++;
    if (sheep <= wolf) return -1;
    let maxSheep = sheep;
    for (let a of arr) {
      for (let b of graph[a]) {
        if (arr.indexOf(b) !== -1) continue;
        const lst = [b, sheep, wolf];
        if (!visited.has(String(lst))) {
          visited.add(String(lst));
          arr.push(b);
          maxSheep = Math.max(maxSheep, dfs(...lst, arr));
          arr.pop();
        }
      }
    }
    return maxSheep;
  };
  visited.add(String([0, 0, 0]));
  return dfs(0);
}
