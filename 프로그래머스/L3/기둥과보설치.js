function solution(n, build_frame) {
  const set = new Set();
  const isValid = () => {
    for (let i of set) {
      const [x, y, a] = i.split(",").map((v) => +v);
      // console.log(set,x,y,a)
      if (a === 0) {
        // 기둥일때
        // y-1 기둥 or x-1 보 일때 or y가 0일때 or 현재위치에 보가 있을때
        if (
          set.has(String([x, y - 1, 0])) ||
          set.has(String([x - 1, y, 1])) ||
          set.has(String([x, y, 1])) ||
          y === 0
        ) {
          continue;
        } else return false;
      } else {
        // 보일때
        // x-1 && x+1 보 위치 확인 or y-1 기둥일때 or x-1,y-1 기둥일때
        if (
          (set.has(String([x - 1, y, 1])) && set.has(String([x + 1, y, 1]))) ||
          set.has(String([x, y - 1, 0])) ||
          set.has(String([x + 1, y - 1, 0]))
        ) {
          continue;
        } else return false;
      }
    }
    return true;
  };
  for (let i of build_frame) {
    if (i[3] === 1) {
      set.add(String(i.slice(0, 3)));
      if (!isValid()) set.delete(String(i.slice(0, 3)));
    } else {
      set.delete(String(i.slice(0, 3)));
      if (!isValid()) set.add(String(i.slice(0, 3)));
    }
  }
  // console.log(set)
  return [...set]
    .map((v) => v.split(",").map((v) => +v))
    .sort((a, b) => {
      if (a[0] === b[0]) {
        if (a[1] === b[1]) {
          return a[2] - b[2];
        }
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });
}
