function solution(N, number) {
  const setList = new Array(9).fill(null).map((_) => new Set());
  for (let i = 1; i < 9; i++) {
    setList[i].add(Number(`${N}`.repeat(i)));
    for (let j = 1; j < i; j++) {
      for (let left of setList[j]) {
        for (let right of setList[i - j]) {
          setList[i].add(left + right);
          setList[i].add(left - right);
          setList[i].add(left * right);
          setList[i].add((left / right) >> 0);
        }
      }
    }
    if (setList[i].has(number)) return i;
  }
  return -1;
}
