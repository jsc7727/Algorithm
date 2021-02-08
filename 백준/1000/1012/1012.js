// https://www.acmicpc.net/problem/1012
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1
    5 3 6
    0 2
    1 2
    2 2
    3 2
    4 2
    4 0
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const C = +input();

for (let i = 0; i < C; i++) {
  const [M, N, K] = input()
    .trim()
    .split(" ")
    .map((v) => +v);

  const arr = new Array(N).fill(null).map((_) => new Array(M).fill(0));
  for (let j = 0; j < K; j++) {
    const [Y, X] = input()
      .trim()
      .split(" ")
      .map((v) => +v);
    arr[X][Y] = 1;
  }
  let count = 0;
  const bfs = (A, B) => {
    const isValid = (x, y) => 0 <= x && x < N && 0 <= y && y < M;
    const arrows = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    // console.log(A, B);
    arr[A][B] = 0;
    const q = [[A, B]];
    while (q.length > 0) {
      const [x, y] = q.shift();
      for (let [xx, yy] of arrows) {
        const [xxx, yyy] = [x + xx, y + yy];
        if (isValid(xxx, yyy) && arr[xxx][yyy] === 1) {
          arr[xxx][yyy] = 0;
          q.push([xxx, yyy]);
        }
      }
    }
  };
  for (let k = 0; k < N; k++) {
    for (let l = 0; l < M; l++) {
      if (arr[k][l] === 1) {
        bfs(k, l);
        count++;
      }
    }
  }
  console.log(count);
}
