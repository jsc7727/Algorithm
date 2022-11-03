function solution(want, number, discount) {
  const dict = {};
  let answer = 0;
  for (let i = 0; i < discount.length; i++) {
    dict[discount[i]] = 0;
  }
  for (let i = 0; i < want.length; i++) {
    dict[want[i]] = number[i];
  }
  const check = () => {
    for (let i of want) {
      if (dict[i] !== 0) return false;
    }
    return true;
  };
  for (let i = 0; i < 10; i++) {
    dict[discount[i]]--;
  }
  if (check() === true) answer++;
  for (let i = 0; i <= discount.length - 9; i++) {
    dict[discount[i]]++;
    dict[discount[i + 10]]--;
    if (check() === true) answer++;
  }
  return answer;
}
