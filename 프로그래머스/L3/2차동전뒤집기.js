function solution(beginning, target) {
  let answer = Infinity;
  const xLen = beginning.length;
  const yLen = beginning[0].length;

  const check = (x_bit, y_bit) => {
    for (let x = 0; x < xLen; x++) {
      const x_check = (x_bit & (1 << x)) > 0 ? 1 : 0;
      for (let y = 0; y < yLen; y++) {
        const y_check = (y_bit & (1 << y)) > 0 ? 1 : 0;
        if ((beginning[x][y] + target[x][y] + x_check + y_check) % 2 === 1) {
          return false;
        }
      }
    }
    return true;
  };

  const count = (bit) => {
    let cnt = 0;
    while (bit > 0) {
      if (bit & 1) {
        cnt++;
      }
      bit >>= 1;
    }
    return cnt;
  };

  for (let x_bit = 0; x_bit < 1 << xLen; x_bit++) {
    for (let y_bit = 0; y_bit < 1 << yLen; y_bit++) {
      if (check(x_bit, y_bit)) {
        answer = Math.min(answer, count(x_bit) + count(y_bit));
      }
    }
  }
  return answer < Infinity ? answer : -1;
}
