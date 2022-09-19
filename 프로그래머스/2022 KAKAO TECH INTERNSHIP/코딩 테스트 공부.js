function solution(alp, cop, problems) {
  let maxAlp = 0;
  let maxCop = 0;
  for (let [al, co] of problems) {
    if (al > maxAlp) maxAlp = al;
    if (co > maxCop) maxCop = co;
  }
  const dp = new Array(maxAlp + 2)
    .fill(null)
    .map((_) => new Array(maxCop + 2).fill(Infinity));
  dp[alp][cop] = 0;
  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
      dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);
      for (let [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
        if (i < alp_req || j < cop_req) continue;
        if (i + alp_rwd > maxAlp) continue;
        if (j + cop_rwd > maxCop) continue;
        dp[i + alp_rwd][j + cop_rwd] = Math.min(
          dp[i + alp_rwd][j + cop_rwd],
          dp[i][j] + cost
        );
      }
    }
  }
  return dp[maxAlp][maxCop];
}

solution(10, 10, [
  [10, 15, 2, 1, 2],
  [20, 20, 3, 3, 4],
]);
