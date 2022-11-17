function solution(relation) {
  var answer = 0;
  const len = relation[0].length;
  let arr = [];
  for (let i = 1; i < 1 << len; i++) {
    let bit = [];
    for (let j = 0; j < len; j++) {
      if ((i & (1 << j)) !== 0) bit.push(j);
    }
    arr.push(bit);
  }
  arr.sort((a, b) => a.length - b.length);
  while (arr.length > 0) {
    const bit = arr.shift();
    const set = new Set();
    for (let tuple of relation) {
      let lst = [];
      for (let idx of bit) {
        lst.push(tuple[idx]);
      }
      set.add(lst.join(" "));
    }
    if (set.size === relation.length) {
      answer++;
      arr = arr.filter((el) => {
        return !bit.every((v) => el.includes(v));
      });
    }
  }
  return answer;
}
