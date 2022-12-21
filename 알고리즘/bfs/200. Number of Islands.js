/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let answer = 0;
  const arrows = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const isValid = (x, y) => 0 <= x && x < xLen && 0 <= y && y < yLen;
  const xLen = grid.length;
  const yLen = grid[0].length;
  const visited = new Array(xLen)
    .fill(null)
    .map((_) => new Array(yLen).fill(false));
  const bfs = (a, b) => {
    let q = [[a, b]];
    while (q.length) {
      const [x, y] = q.shift();
      for (let [xx, yy] of arrows) {
        const [xxx, yyy] = [x + xx, y + yy];
        if (!isValid(xxx, yyy)) continue;
        if (visited[xxx][yyy] === false && grid[xxx][yyy] === "1") {
          visited[xxx][yyy] = true;
          q.push([xxx, yyy]);
        }
      }
    }
  };

  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (visited[i][j] === false && grid[i][j] === "1") {
        visited[i][j] = true;
        answer++;
        bfs(i, j);
      }
    }
  }
  return answer;
};
