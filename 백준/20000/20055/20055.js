const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 8
    100 99 60 80 30 20 10 89 99 100`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => +v);

const arr = input()
  .trim()
  .split(" ")
  .map((v) => [false, +v]);

let answer = 0;

const quit = () => {
  if (arr[N - 1][0] === true) {
    arr[N - 1][0] = false;
  }
};

let count = 0;
while (true) {
  answer++;
  // 1. 벨트가 각 칸 위에 있는 로봇과 함께 한 칸 회전한다.
  arr.unshift(arr.pop());
  // 하차
  quit();
  // 2. 가장 먼저 벨트에 올라간 로봇부터, 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동한다. 만약 이동할 수 없다면 가만히 있는다.
  // 로봇이 이동하기 위해서는 이동하려는 칸에 로봇이 없으며, 그 칸의 내구도가 1 이상 남아 있어야 한다.
  for (let i = N - 1; i > 0; i--) {
    const [hasRobot, durability] = arr[i];
    const [leftHasRobot, leftDurability] = arr[i - 1];
    if (leftHasRobot === true && hasRobot === false && durability > 0) {
      arr[i][0] = true;
      arr[i][1]--;
      if (arr[i][1] === 0) {
        count++;
      }
      arr[i - 1][0] = false;
    }
  }
  quit();

  // 3. 올리는 위치에 있는 칸의 내구도가 0이 아니면 올리는 위치에 로봇을 올린다.
  if (arr[0][0] === false && arr[0][1] > 0) {
    arr[0][0] = true;
    arr[0][1]--;
    if (arr[0][1] === 0) {
      count++;
    }
  }

  // 4.내구도가 0인 칸의 개수가 K개 이상이라면 과정을 종료한다. 그렇지 않다면 1번으로 돌아간다.
  if (count >= M) break;
}
console.log(answer);
