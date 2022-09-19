const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 5
    #####
    #..B#
    #.#R#
    #.O.#
    #####`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const arr = [];
let R = [];
let B = [];
const O = [];

for (let i = 0; i < N; i++) {
  const lst = input().trim().split("");
  rIndex = lst.indexOf("R");
  bIndex = lst.indexOf("B");
  oIndex = lst.indexOf("O");
  if (rIndex >= 0) {
    R.push(i, rIndex);
  }
  if (bIndex >= 0) {
    B.push(i, bIndex);
  }
  if (oIndex >= 0) {
    O.push(i, oIndex);
  }
  arr.push(lst);
}

const arrows = {
  right: [0, 1],
  left: [0, -1],
  bottom: [1, 0],
  top: [-1, 0],
};

for (let [x, y] of [R, B]) {
  let count = 0;
  for (let [xx, yy] of Object.values(arrows)) {
    const [xxx, yyy] = [x + xx, y + yy];
    if (arr[xxx][yyy] === "#") count++;
  }
  if (count === 4) {
    console.log(1);
    return;
  }
}

const moveArrow = (arrow, R, B) => {
  let lst = [];
  console.log(arrow, R, B);
  if (arrow[0] === 0 && R[0] === B[0]) {
    if (arrow[1] === -1) {
      if (R[1] < B[1]) {
        console.log(1);
        lst = [
          [R, "R"],
          [B, "B"],
        ];
      } else {
        console.log(2);
        lst = [
          [B, "B"],
          [R, "R"],
        ];
      }
    } else {
      if (R[1] > B[1]) {
        console.log(3);
        lst = [
          [R, "R"],
          [B, "B"],
        ];
      } else {
        console.log(4);
        lst = [
          [B, "B"],
          [R, "R"],
        ];
      }
    }
  }
  if (arrow[1] === 0 && R[1] === B[1]) {
    if (arrow[0] === -1) {
      if (R[0] < B[0]) {
        console.log(5);
        lst = [
          [R, "R"],
          [B, "B"],
        ];
      } else {
        console.log(6);
        lst = [
          [B, "B"],
          [R, "R"],
        ];
      }
    } else {
      if (R[0] > B[0]) {
        console.log(7);
        lst = [
          [R, "R"],
          [B, "B"],
        ];
      } else {
        console.log(arrow[1] === 0);
        console.log(8);
        lst = [
          [B, "B"],
          [R, "R"],
        ];
      }
    }
  }
  console.log(lst);

  let redOut = false;
  let blueOut = false;
  for (let [[x, y], c] of lst) {
    while (true) {
      const [xx, yy] = arrow;
      const [xxx, yyy] = [x + xx, y + yy];
      if (arr[xxx][yyy] === ".") {
        arr[xxx][yyy] = c;
        R = [xxx, yyy];
        arr[x][y] = ".";
      } else if (arr[xxx][yyy] === "O") {
        arr[x][y] = ".";
        redOut = true;
        break;
      } else {
        break;
      }
    }
  }
  //   console.log(arr);
  //   if (blueOut === false) {
  //     while (true) {
  //       const [x, y] = B;
  //       const [xx, yy] = arrow;
  //       const [xxx, yyy] = [x + xx, y + yy];
  //       if (arr[xxx][yyy] === ".") {
  //         arr[xxx][yyy] = "B";
  //         B = [xxx, yyy];
  //         arr[x][y] = ".";
  //       } else if (arr[xxx][yyy] === "O") {
  //         arr[x][y] = ".";
  //         blueOut = true;
  //         break;
  //       } else {
  //         break;
  //       }
  //     }
  //   }
  //   console.log(arr);
  //   if (redOut === false) {
  //     while (true) {
  //       const [x, y] = R;
  //       const [xx, yy] = arrow;
  //       const [xxx, yyy] = [x + xx, y + yy];
  //       if (arr[xxx][yyy] === ".") {
  //         arr[xxx][yyy] = "R";
  //         R = [xxx, yyy];
  //         arr[x][y] = ".";
  //       } else if (arr[xxx][yyy] === "O") {
  //         arr[x][y] = ".";
  //         redOut = true;
  //         break;
  //       } else {
  //         break;
  //       }
  //     }
  //     console.log(arr);
  //   }
  //   if (redOut === true && blueOut === false) {
  //     return true;
  //   } else {
  //     return false;
  //   }
};

const bfs = () => {
  for (let arrow of Object.keys(arrows)) {
    moveArrow(arrows[arrow], [...R], [...B]);
    console.log(arr, arrow);
  }
};
bfs();
