function solution(key, lock) {
  var answer = [];
  let right = rotation(key);
  let down = rotation(right);
  let left = rotation(down);

  answer.push(check(key, lock));
  answer.push(check(right, lock));
  answer.push(check(down, lock));
  answer.push(check(left, lock));
  return answer.indexOf(true) != -1 ? true : false;
}

const rotation = (key) =>
  key.map((v, indexX) => v.map((k, indexY) => key[indexY][indexX]).reverse());
const check = (key, lock) => {
  let addLockSize = lock.length + key.length * 2 - 2;
  let flag = 0;

  let start = key.length - 1;
  let end = key.length - 1 + lock.length;

  // 0배열에 lock 추가하기
  for (let a = 0; a < end; a++) {
    for (let b = 0; b < end; b++) {
      flag = 0;
      let addLock = [];
      for (let i = 0; i < addLockSize; i++) {
        let list = [];
        for (let k = 0; k < addLockSize; k++) {
          list.push(0);
        }
        addLock.push(list);
      }
      //key 값 넣어주고
      for (let i = a; i < key.length + a; i++) {
        for (let k = b; k < key.length + b; k++) {
          addLock[i][k] += key[i - a][k - b];
        }
      }
      //lock 값 넣고 해당 자리값이 1이 아닐 경우 flag = false;
      for (let i = start, x = 0; i < end; i++, x++) {
        for (let k = start, y = 0; k < end; k++, y++) {
          addLock[i][k] += lock[x][y];
          if (addLock[i][k] == 1) flag++;
        }
      }
      if (flag == lock.length * lock.length) break;
    }
    if (flag == lock.length * lock.length) break;
  }
  return flag == lock.length * lock.length ? true : false;
};
