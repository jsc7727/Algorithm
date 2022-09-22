function solution(play_time, adv_time, logs) {
  const changeTimeToSecond = (str) => {
    const arr = str.split(":").map((v) => +v);
    let second = 0;
    second += arr[0] * 3600;
    second += arr[1] * 60;
    second += arr[2];
    return second;
  };

  const changeSecondToTime = (time) => {
    const hour = Math.floor(time / 3600);
    time %= 3600;
    const min = Math.floor(time / 60);
    time %= 60;
    const second = time;
    return [
      hour.toString().padStart(2, "0"),
      min.toString().padStart(2, "0"),
      second.toString().padStart(2, "0"),
    ].join(":");
  };

  const advSecond = changeTimeToSecond(adv_time);
  const playSecond = changeTimeToSecond(play_time);
  const dp = new Array(playSecond).fill(0);
  for (let t of logs) {
    const [start, end] = t.split("-");
    const startTime = changeTimeToSecond(start);
    const endTime = changeTimeToSecond(end);
    dp[startTime]++;
    dp[endTime]--;
  }
  for (let i = 1; i <= playSecond; i++) dp[i] += dp[i - 1];
  for (let i = 1; i <= playSecond; i++) dp[i] += dp[i - 1];
  let answerSecond = 0;
  let answerCount = dp[advSecond - 1];
  for (let i = 0; i < playSecond; i++) {
    const sumCount = dp[i] - dp[i - advSecond];
    if (sumCount > answerCount) {
      answerSecond = i - advSecond + 1;
      answerCount = sumCount;
    }
  }
  return changeSecondToTime(answerSecond);
}
