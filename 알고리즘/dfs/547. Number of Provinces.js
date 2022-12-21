/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let answer = 0;
  const visited = new Array(isConnected.length).fill(false);
  const dfs = (i) => {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1 && visited[j] === false) {
        visited[j] = true;
        dfs(j);
      }
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (visited[i] === false) {
      visited[i] = true;
      answer++;
      dfs(i);
    }
  }
  return answer;
};
