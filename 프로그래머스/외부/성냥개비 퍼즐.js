function solution(board) {
  var answer = 0;
  const len = board.length;
  const countCheck = (nBit) => {
    const arr = new Array(len).fill(null).map((_) => new Array(len).fill(0));
    let cnt = 0;
    let oneCnt = 0;
    let start = null;
    while (nBit > 0) {
      if (nBit & 1) {
        arr[(cnt / len) >> 0][cnt % len] = 1;
        if (start === null) start = [(cnt / len) >> 0, cnt % len];
        oneCnt++;
      }
      cnt++;
      nBit = nBit >> 1;
    }
    return [arr, oneCnt, start];
  };
  const arrows = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const isValid = (x, y) => 0 <= x && x < len && 0 <= y && y < len;
  const stickCheck = (arr, x, y) => {
    let cnt = 0;
    for (let [xx, yy] of arrows) {
      const [xxx, yyy] = [x + xx, y + yy];
      if (isValid(xxx, yyy) && arr[xxx][yyy] === 1) cnt++;
    }
    if (arr[x][y] === 0) {
      return cnt === board[x][y] || board[x][y] === -1;
    } else {
      return 4 - cnt === board[x][y] || board[x][y] === -1;
    }
  };
  const bfs = (arr, oneCnt, start) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (!stickCheck(arr, i, j)) return false;
      }
    }
    const q = [start];
    arr[start[0]][start[1]] = 0;
    oneCnt--;
    while (q.length > 0) {
      const [x, y] = q.shift();
      for (let [xx, yy] of arrows) {
        const [xxx, yyy] = [x + xx, y + yy];
        if (!isValid(xxx, yyy)) continue;
        if (arr[xxx][yyy] === 1) {
          arr[xxx][yyy] = 0;
          oneCnt--;
          q.push([xxx, yyy]);
        }
      }
    }
    if (oneCnt === 0) {
      console.log(start, oneCnt);
      for (let i of arr) console.log(i.join(""));
      console.log(oneCnt);
      return true;
    } else return false;
  };
  for (let bit = 1; bit < 1 << (len * len); bit++) {
    const [arr, oneCnt, start] = countCheck(bit);
    if (bfs(arr, oneCnt, start) === true) answer++;
  }
  console.log(answer);
  return answer;
}
solution([
  [3, -1, 3],
  [-1, 2, -1],
  [3, -1, 3],
]);
