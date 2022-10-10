function solution(n, money) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i of money) {
    for (let j = i; j <= n; j++) {
      if (j >= i) {
        dp[j] += dp[j - i];
      }
    }
  }
  return dp[n] % 1000000007;
}
