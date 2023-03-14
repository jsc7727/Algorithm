const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
    100 1
    100 1
    100 1
    100 1
    100 1
    100 1
`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const n = +input();
const arr = [];
// [계란 내구도, 계란 무게
for (let i = 0; i < n; i++) {
  arr.push(
    input()
      .split(" ")
      .map((v) => +v)
  );
}

const hitEgg = (target, now) => {
  arr[target][0] -= arr[now][1];
  arr[now][0] -= arr[target][1];
};
const recvEgg = (target, now) => {
  arr[target][0] += arr[now][1];
  arr[now][0] += arr[target][1];
};

let answer = n;
const dfs = (egg = n, now = 0) => {
  if (egg === 0) {
    answer = Math.min(answer, egg);
    return;
  } else if (now === n) {
    answer = Math.min(answer, egg);
    return;
  } else if (arr[now][0] <= 0) {
    dfs(egg, now + 1);
  } else {
    for (let target = 0; target < n; target++) {
      // 같은 계란을 칠수는 없지
      if (target === now) continue;
      // 손에든 것이 깨짐
      if (arr[now][0] <= 0) continue;
      // 타겟이 깨짐
      if (arr[target][0] <= 0) continue;
      // 깨기
      hitEgg(target, now);
      dfs(
        egg - (arr[target][0] <= 0 ? 1 : 0) - (arr[now][0] <= 0 ? 1 : 0),
        now + 1
      );
      recvEgg(target, now);
    }
    answer = Math.min(answer, egg);
  }
};

dfs();
console.log(n - answer);
