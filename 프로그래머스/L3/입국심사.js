function solution(n, times) {
  times.sort((a, b) => a - b);
  const bSearch = () => {
    let left = 0;
    let right = times[times.length - 1] * n;
    let count = right;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const value = times.reduce((a, b) => (a += Math.floor(mid / b)), 0);
      if (value >= n) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
  return bSearch();
}
