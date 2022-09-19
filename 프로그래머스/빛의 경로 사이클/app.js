function solution(grid) {
  const answer = [];
  const xLen = grid.length;
  const yLen = grid[0].length;
  const arrows = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ]; // 북 서 남 동
  const dic = {
    L: [3, 0, 1, 2],
    S: [0, 1, 2, 3],
    R: [1, 2, 3, 0],
  };

  const visited = new Array(xLen)
    .fill(null)
    .map((_) =>
      new Array(yLen).fill(null).map((_) => new Array(4).fill(false))
    );

  const cycle = (i, j, k) => {
    let count = 0;
    let nowArrow = k;
    let x = i;
    let y = j;
    while (visited[x][y][nowArrow] === false) {
      count++;
      visited[x][y][nowArrow] = true;
      nowArrow = dic[grid[x][y]][nowArrow];
      const [arrowX, arrowY] = arrows[nowArrow];
      x += arrowX;
      y += arrowY;
      x = x >= xLen ? 0 : x < 0 ? xLen - 1 : x;
      y = y >= yLen ? 0 : y < 0 ? yLen - 1 : y;
    }
    return count;
  };
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      for (let k = 0; k < 4; k++) {
        if (visited[i][j][k] === true) continue;
        answer.push(cycle(i, j, k));
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution(["S"]));
