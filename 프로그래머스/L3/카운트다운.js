function solution(target) {
  // target 최대는 100,000이며 곱하기 3한 값만큼 배열을 생성
  // 배열 길이는 300,000
  // [던질 다트 수, "싱글" 또는 "불"을 맞춘 횟수(합)] 으로 배열 초기화
  const dp = new Array(300000).fill(null).map((_) => [Infinity, 0]);

  // 과녁은 1~20이므로 target 배열 초기화
  const targetList = new Array(20).fill(null).map((_, idx) => idx + 1);

  // dp 처음 0으로 초기화
  dp[0][0] = 0;

  for (let i = 0; i < target; i++) {
    const check = (addIdx, count) => {
      if (dp[i + addIdx][0] >= dp[i][0] + 1) {
        if (dp[i + addIdx][0] === dp[i][0] + 1) {
          dp[i + addIdx][1] = Math.max(dp[i + addIdx][1], dp[i][1] + count);
        } else {
          dp[i + addIdx] = [dp[i][0] + 1, dp[i][1] + count];
        }
      }
    };
    for (let j of targetList) {
      // 순서대로 싱글, 더블, 트리플
      [
        [1, 1],
        [2, 0],
        [3, 0],
      ].forEach(([v, c]) => {
        check(j * v, c);
      });
    }
    // 불 일때
    check(50, 1);
  }
  return dp[target];
}
