function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const temp = Math.floor(n / a) * b;
    n = (n % a) + temp;
    answer += temp;
  }
  return answer;
}
