function solution(n, cores) {
  var answer = 0;
  const arr = cores.map((v) => 1 / v);
  const check = (x) => arr.reduce((a, b) => a + Math.ceil(b * x), 0);
  const bSearch = () => {
    let left = 0;
    let right = Math.ceil(n / cores.reduce((a, b) => a + 1 / b));
    while (left < right) {
      const mid = ((left + right) / 2) >> 0;
      const count = cores.reduce((a, b) => a + Math.ceil(mid / b), 0);
      console.log(mid, count, count < n, count, n);
      if (count >= n) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
  const res = bSearch();
  console.log("bSearch", res);
  const newArr = arr.map((v) => v * (res - 1));
  console.log(newArr);
  let idx = n - check(res - 1);
  let i = 0;
  console.log("idx", idx);
  for (; i < newArr.length; i++) {
    console.log(i);
    const sum = newArr[i];
    if (sum === sum >> 0) {
      if (--idx === 0) {
        console.log("break");
        break;
      }
    }
  }
  return i + 1;
}
const res = solution(6, [1, 2, 3]);
console.log(res);

// console.log([1, 2, 3].reduce((a, b) => a + ((3 / b) >> 0), 0));
