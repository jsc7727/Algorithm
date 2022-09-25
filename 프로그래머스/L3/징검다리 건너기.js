function solution(stones, k) {
  const canCross = (friend) => {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
      const stone = stones[i];
      if (stone - friend <= 0) {
        count++;
      } else {
        count = 0;
      }
      if (count === k) return false;
    }
    return true;
  };
  let l = 0;
  let r = 200000000;
  while (l < r) {
    const mid = (r + l) >> 1;
    const res = canCross(mid);
    if (res === true) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}
