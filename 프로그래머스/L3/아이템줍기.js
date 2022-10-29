function solution(rectangle, characterX, characterY, itemX, itemY) {
  const len = 25;
  const arr = new Array(len).fill(null).map((_) => new Array(len).fill(0));
  for (let [x, y, xx, yy] of rectangle) {
    x *= 2;
    y *= 2;
    xx *= 2;
    yy *= 2;
    for (let i = x; i <= xx; i++) {
      for (let j = y; j <= yy; j++) {
        if (i === x || j === y || i === xx || j === yy) {
          if (arr[i][j] !== 1) {
            arr[i][j] += 1;
          }
        } else {
          arr[i][j] += 2;
        }
      }
    }
  }
  for (let i of arr) console.log(i.join(" "));

  const bfs = () => {
    const q = [[characterX * 2, characterY * 2, 1]];
    arr[characterX * 2][characterY * 2] = 3;
    const arrows = [
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, 0],
    ];
    while (q.length > 0) {
      const [x, y, c] = q.shift();
      if (x === itemX * 2 && y === itemY * 2) {
        return c >> 1;
      }
      for (let [xx, yy] of arrows) {
        const [xxx, yyy] = [x + xx, y + yy];
        if (arr[xxx][yyy] === 1) {
          arr[xxx][yyy] = 3;
          q.push([xxx, yyy, c + 1]);
        }
      }
    }
  };
  return bfs();
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
);
