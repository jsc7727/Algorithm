function solution(board) {
  const N = board.length;
  const visited = new Set();
  const arrows = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < N;
  const isValid2 = (lx, ly, rx, ry) =>
    board[lx][ly] === 0 && board[rx][ry] === 0;
  const check = (x, y) => {
    if (x === N - 1 && y === N - 1) return true;
    return false;
  };
  const bfs = () => {
    const q = [[[0, 0, 0, 1], 0]];
    visited.add(`${[0, 0, 0, 1]}`);
    visited.add(`${[0, 1, 0, 0]}`);
    while (q.length > 0) {
      const [[lx, ly, rx, ry], c] = q.shift();
      if (check(lx, ly) || check(rx, ry)) return c;
      for (let [xx, yy] of arrows) {
        const lxrx = [lx + xx, ly + yy, rx + xx, ry + yy];
        const [lxxx, lyyy, rxxx, ryyy] = lxrx;
        if (
          isValid(lxxx, lyyy) &&
          isValid(rxxx, ryyy) &&
          isValid2(...lxrx) &&
          !visited.has(`${lxrx}`)
        ) {
          visited.add(`${[lxxx, lyyy, rxxx, ryyy]}`);
          visited.add(`${[rxxx, ryyy, lxxx, lyyy]}`);
          q.push([lxrx, c + 1]);
        }
      }
      const udArrow = [-1, 1];
      const rotate = (addX, addY) => {
        const [lx2, ly2, rx2, ry2] = [
          lx + addX,
          ly + addY,
          rx + addX,
          ry + addY,
        ];
        if (
          isValid(lx2, ly2) &&
          isValid(rx2, ry2) &&
          isValid2(lx2, ly2, rx2, ry2)
        ) {
          const xy1 = [lx, ly, lx2, ly2];
          if (!visited.has(`${xy1}`)) {
            visited.add(`${xy1}`);
            visited.add(`${[lx2, ly2, lx, ly]}`);
            q.push([xy1, c + 1]);
          }
          const xy2 = [rx, ry, rx2, ry2];
          if (!visited.has(`${xy2}`)) {
            visited.add(`${xy2}`);
            visited.add(`${[rx2, ry2, rx, ry]}`);
            q.push([xy2, c + 1]);
          }
        }
      };
      if (lx === rx) {
        // 가로
        console.log(lx, ly, rx, ry);
        for (let i of udArrow) {
          rotate(i, 0);
        }
      }
      if (ly === ry) {
        // 세로
        for (let i of udArrow) {
          rotate(0, i);
        }
      }
    }
  };
  const res = bfs();
  return res;
}

console.log(
  solution([
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ])
);
