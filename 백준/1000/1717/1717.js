const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0]
    .trim()
    .split(" ")
    .map((v) => +v);
  const arr = input.slice(1).map((v) =>
    v
      .trim()
      .split(" ")
      .map((v) => +v)
  );
  solution(N, M, arr);
  process.exit();
});

const solution = (N, M, arr) => {
  const dp = new Array(N + 1).fill(null).map((_, idx) => idx);
  // console.log(dp);

  const getParent = (x) => {
    if (dp[x] === x) return x;
    return (dp[x] = getParent(dp[x]));
  };
  const answer = [];
  for (let i = 0; i < M; i++) {
    const [c, a, b] = arr[i];
    if (c === 0) {
      const x = getParent(a);
      const y = getParent(b);
      //   console.log(x, y);
      if (x > y) dp[x] = dp[y];
      else dp[y] = dp[x];
      console.log(dp, x, y);
    } else {
      if (getParent(a) === getParent(b)) {
        answer.push("YES");
      } else {
        answer.push("NO");
      }
    }
  }
  console.log(answer.join("\n"));
};
