const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `9
    4 3
    ####
    #*@.
    ####
    7 6
    ###.###
    #*#.#*#
    #.....#
    #.....#
    #..@..#
    #######
    7 4
    ###.###
    #....*#
    #@....#
    .######
    5 5
    .....
    .***.
    .*@*.
    .***.
    .....
    3 3
    ###
    #@#
    ###
    10 5
    ##########
    #@....#*.#
    #.....#..#
    #.....#..#
    ##.#######
    4 3
    ####
    ##@#
    #*.#
    4 4
    ####
    ##*#
    #@.#
    ##.#
    1 1
    @`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const arrows = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const isValid = (x, y, n, m) => 0 <= x && x < n && 0 <= y && y < m;
const bfs = (arr, q, n, m) => {
  let idx = 0;
  while (idx < q.length) {
    const [type, x, y] = q[idx++];
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (isValid(xxx, yyy, n, m) && arr[xxx][yyy] === ".") {
        arr[xxx][yyy] = arr[x][y] + 1;
        if (
          type === "p" &&
          (xxx === 0 || xxx === n - 1 || yyy === 0 || yyy === m - 1)
        ) {
          return arr[x][y] + 1;
        } else {
          q.push([type, xxx, yyy]);
        }
      }
    }
  }
  return "IMPOSSIBLE";
};

const c = +input();
let answer = [];
for (let _ = 0; _ < c; _++) {
  const [m, n] = input()
    .split(" ")
    .map((v) => +v);

  const arr = [];
  const fires = [];
  const person = [];
  for (let i = 0; i < n; i++) {
    const str = input().split("");
    arr.push(str);
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === "*") {
        fires.push(["f", i, j]);
        arr[i][j] = 1;
      }
      if (arr[i][j] === "@") {
        person.push(["p", i, j]);
        arr[i][j] = 1;
      }
    }
  }
  const [type, personX, personY] = person[0];
  if (
    personX === 0 ||
    personX === n - 1 ||
    personY === 0 ||
    personY === m - 1
  ) {
    answer.push(1);
  } else {
    answer.push(bfs(arr, fires.concat(person), n, m));
  }
}
console.log(answer.join("\n"));
