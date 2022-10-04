function solution(a) {
  let minI = a[0];
  let minJ = a[a.length - 1];
  const set = new Set();
  for (let i = 1; i < a.length - 1; i++) {
    if (minI > a[i]) {
      minI = a[i];
      set.add(i);
    }
  }
  for (let j = a.length - 2; j > 0; j--) {
    if (minJ > a[j]) {
      minJ = a[j];
      set.add(j);
    }
  }
  return set.size + 2;
}
