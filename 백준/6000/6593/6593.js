//https://www.acmicpc.net/problem/6593

const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 4 5
    S....
    .###.
    .##..
    ###.#
    
    #####
    #####
    ##.##
    ##...
    
    #####
    #####
    #.###
    ####E
    
    1 3 3
    S##
    #E#
    ###
    
    0 0 0
`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const arrows = [
  [0, 0, 1],
  [0, 0, -1],
  [0, 1, 0],
  [0, -1, 0],
  [1, 0, 0],
  [-1, 0, 0],
];

while (true) {
  const [X, Y, Z] = input()
    .split(" ")
    .map((v) => +v);

  const isValid = (a, b, c) =>
    0 <= a && a < X && 0 <= b && b < Y && 0 <= c && c < Z;

  if (X === 0) break;
  const arr = [];
  for (let i = 0; i < X; i++) {
    const newArr = [];
    for (let j = 0; j < Y; j++) {
      newArr.push(input().split(""));
    }
    arr.push(newArr);
    input();
  }
  const find = () => {
    let start = null;
    let end = null;
    for (let i = 0; i < X; i++) {
      for (let j = 0; j < Y; j++) {
        for (let k = 0; k < Z; k++) {
          if (arr[i][j][k] === "S") start = [i, j, k];
          if (arr[i][j][k] === "E") end = [i, j, k];
        }
      }
    }
    return [start, end];
  };

  const bfs = () => {
    const [start, end] = find();
    const q = [start];

    arr[start[0]][start[1]][start[2]] = 0;
    arr[end[0]][end[1]][end[2]] = ".";
    while (q.length > 0) {
      const [x, y, z] = q.shift();
      for (let [xx, yy, zz] of arrows) {
        const [xxx, yyy, zzz] = [x + xx, y + yy, z + zz];
        if (isValid(xxx, yyy, zzz) && arr[xxx][yyy][zzz] === ".") {
          arr[xxx][yyy][zzz] = arr[x][y][z] + 1;
          q.push([xxx, yyy, zzz]);
        }
      }
    }
    return arr[end[0]][end[1]][end[2]];
  };
  const result = bfs();

  if (result === ".") {
    console.log("Trapped!");
  } else {
    console.log(`Escaped in ${result} minute(s).`);
  }
}
