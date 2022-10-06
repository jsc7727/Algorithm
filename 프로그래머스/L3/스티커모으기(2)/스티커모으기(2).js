function solution(sticker) {
  const len = sticker.length;
  if (sticker.length === 1) return sticker[0];
  const dp = new Array(len).fill(0);
  dp[0] = sticker[0];
  dp[1] = sticker[0];
  for (let i = 2; i < len - 1; i++) {
    dp[i] = Math.max(dp[i - 2] + sticker[i], dp[i - 1]);
  }
  const dp2 = new Array(len).fill(0);
  dp2[0] = 0;
  dp2[1] = sticker[1];
  for (let i = 2; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 2] + sticker[i], dp2[i - 1]);
  }
  return Math.max(dp[len - 2], dp2[len - 1]);
}
