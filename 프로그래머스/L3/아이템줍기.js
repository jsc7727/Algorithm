function solution(rectangle, characterX, characterY, itemX, itemY) {
  const len = 12;
  const arr = new Array(len).fill(null).map((_) => new Array(len).fill(0));
  for (let [x, y, xx, yy] of rectangle) {
    arr[x][y]++;
    arr[x][yy + 1]--;
    arr[xx + 1][y]--;
    arr[xx + 1][yy + 1]++;
  }
  for (let i = 1; i < len; i++) {
    let sum = 0;
    for (let j = 1; j < len; j++) {
      sum += arr[i][j];
      arr[i][j] = arr[i - 1][j] + sum;
    }
  }
  const bfs = () => {
    const q = [[characterX, characterY, 1]];
    const arrows = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    const arrows2 = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
      [-1, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
    ];
    const arrowCheck = (x, y) => {
      let count = 0;
      for (let [xx, yy] of arrows) {
        const [xxx, yyy] = [x + xx, y + yy];
        if (arr[xxx][yyy] === 0) count++;
      }
      return count;
    };
    let count = Infinity;
    while (q.length > 0) {
      const [x, y, c] = q.shift();
      arr[x][y] = -1;
      console.log(x, y, c);
      if (x === itemX && y === itemY) {
        count = Math.min(count, c);
        continue;
      }
      for (let i = 0; i < arrows2.length; i++) {
        const [xx, yy] = arrows2[i];
        const [xxx, yyy] = [x + xx, y + yy];
        if (arr[xxx][yyy] > 0) {
          const count = arrowCheck(xxx, yyy);
          if (count > 0) {
            q.push([xxx, yyy, c + count]);
            break;
          }
        }
      }
    }
    return count;
  };
  const res = bfs();
  for (let i of arr) console.log(i.join("    "));
  return res;
}

console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7));
