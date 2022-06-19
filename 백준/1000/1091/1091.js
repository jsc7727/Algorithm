const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `12
    1 1 2 0 2 0 1 0 2 2 1 0
    5 0 9 7 1 8 3 10 4 11 6 2`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

// 사람 수
const N = +input();

// 어느 플레이어에게 가야하는지
let P = input()
  .trim()
  .split(" ")
  .map((v) => +v);

// i번째 위치에 있던 카드는 S[i]
let S = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const suffle = (P, S) => {
  let newP = new Array(N);
  for (let i = 0; i < N; i++) {
    newP[S[i]] = P[i];
  }
  return newP;
};
const temp = [...P];

const checker = (P) => {
  for (let i = 0; i < P.length; i++) {
    const index = i % 3;
    if (index !== P[i]) {
      return false;
    }
  }
  return true;
};

let count = 0;
if (!checker(P)) {
  while (true) {
    count += 1;
    const result = suffle(P, S);
    // console.log(result);
    P = result;
    if (P.join() === temp.join()) {
      count = -1;
      break;
    }
    if (checker(P)) {
      break;
    }
  }
}
console.log(count);
