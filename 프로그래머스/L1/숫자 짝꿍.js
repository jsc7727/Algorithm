function solution(X, Y) {
  var answer = "";
  const x = {};
  const y = {};
  for (let i = 0; i < 10; i++) {
    x[i] = y[i] = 0;
  }
  for (let i of X) x[i]++;
  for (let i of Y) y[i]++;
  for (let i = 9; i >= 0; i--) {
    answer += String(i).repeat(Math.min(x[i], y[i]));
  }
  if (answer === "") return "-1";
  if (+answer === 0) return "0";
  return answer;
}
