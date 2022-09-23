function solution(gems) {
  const dict = {};
  let max = 0;
  for (let gem of gems) {
    if (!dict.hasOwnProperty(gem)) {
      dict[gem] = 0;
      max++;
    }
  }
  let count = 0;
  let l = 0;
  let r = 0;
  const len = gems.length;
  let answer = [];
  let minDiff = Infinity;
  while (l <= len && r <= len) {
    if (count === max) {
      if (minDiff > r - l) {
        minDiff = r - l;
        answer = [l + 1, r];
      }
      dict[gems[l]]--;
      if (dict[gems[l]] === 0) count--;
      l++;
    } else {
      dict[gems[r]]++;
      if (dict[gems[r]] === 1) count++;
      r++;
    }
  }
  return answer;
}
