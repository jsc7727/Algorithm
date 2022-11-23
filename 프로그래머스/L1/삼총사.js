function solution(number) {
  let answer = 0;
  const maxCnt = 3;
  const dfs = (idx = 0, array = [], num = 0, cnt = 0) => {
    if (cnt === maxCnt) {
      if (num === 0) answer++;
      return;
    } else {
      for (let i = idx; i < number.length; i++) {
        dfs(i + 1, array, num + number[i], cnt + 1);
      }
    }
  };
  dfs();
  return answer;
}
