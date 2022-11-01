function solution(game_board, table) {
  var answer = 0;
  const xLen = game_board.length;
  const yLen = game_board[0].length;
  const arr = [];
  const arrows = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const isValid = (x, y) => 0 <= x && x < xLen && 0 <= y && y < yLen;
  const bfs = (i, j) => {
    const q = [[i, j]];
    let idx = 0;
    while (idx < q.length) {
      const [x, y] = q[idx++];
      for (let [xx, yy] of arrows) {
        const [xxx, yyy] = [x + xx, y + yy];
        if (isValid(xxx, yyy) && table[xxx][yyy] === 1) {
          table[xxx][yyy] = 0;
          q.push([xxx, yyy]);
        }
      }
    }
    return q;
    // return q.map(v=>[v[0]-q[0][0],v[1]-q[0][1]])
  };
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (table[i][j] === 1) {
        table[i][j] = 0;
        arr.push(bfs(i, j));
      }
    }
  }
  const checked = new Array(arr.length).fill(false);
  const checker = (i, j) => {
    const check = (targetArr) => {
      for (let [xx, yy] of targetArr) {
        const [xxx, yyy] = [i + xx, j + yy];
        if (!isValid(xxx, yyy) || game_board[xxx][yyy] === 1) {
          return false;
        }
      }
      for (let [xx, yy] of targetArr) {
        const [xxx, yyy] = [i + xx, j + yy];
        game_board[xxx][yyy] = 1;
      }
      return true;
    };
    for (let i = 0; i < arr.length; i++) {
      const targetArr = arr[i];
      if (checked[i] === false && check(targetArr) === true) {
        checked[i] = true;
      }
    }
  };

  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (game_board[i][j] === 0) {
        checker(i, j);
      }
    }
  }
  console.log(checked);
  return answer;
}

console.log(solution(res));
