function solution(board) {
  const xLen = board.length;
  const yLen = board[0].length;
  const isValid = (x, y) => 0 <= x && x < xLen && 0 <= y && y < yLen;
  const visitedValue = new Array(xLen)
    .fill(null)
    .map((_) =>
      new Array(yLen).fill(null).map((_) => new Array(4).fill(Infinity))
    );
  const arrows = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const bfs = () => {
    const q = [[0, 0, null]];
    visitedValue[0][0] = new Array(4).fill(null);
    while (q.length > 0) {
      const [x, y, prevArrow] = q.shift();
      for (let i = 0; i < arrows.length; i++) {
        const [xx, yy] = arrows[i];
        const [xxx, yyy] = [x + xx, y + yy];
        if (isValid(xxx, yyy) && board[xxx][yyy] === 0) {
          let sumValue = prevArrow === null ? 0 : visitedValue[x][y][prevArrow];
          sumValue += prevArrow === i || prevArrow === null ? 100 : 600;
          if (visitedValue[xxx][yyy][i] > sumValue) {
            visitedValue[xxx][yyy][i] = sumValue;
            q.push([xxx, yyy, i]);
          }
        }
      }
    }
  };
  bfs();
  for (let i of visitedValue) {
    console.log(i.map((v) => v[0]));
  }
  console.log("------------");
  for (let i of visitedValue) {
    console.log(i.map((v) => v[1]));
  }
  console.log("------------");
  for (let i of visitedValue) {
    console.log(i.map((v) => v[2]));
  }
  console.log("------------");
  for (let i of visitedValue) {
    console.log(i.map((v) => v[3]));
  }
  return Math.min(...visitedValue[xLen - 1][yLen - 1]);
}
