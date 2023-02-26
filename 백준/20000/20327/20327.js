const fs = require("fs");

const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 8
    1 2 3 4 5 6 7 8
    9 10 11 12 13 14 15 16
    17 18 19 20 21 22 23 24
    25 26 27 28 29 30 31 32
    33 34 35 36 37 38 39 40
    41 42 43 44 45 46 47 48
    49 50 51 52 53 54 55 56
    57 58 59 60 61 62 63 64
1 2
8 1
7 2
4 0
3 2
5 1
6 1
2 2
`
).split("\n");

const input = (() => {
  let count = 0;
  return () => stdin[count++].trim();
})();

const [N, R] = input()
  .split(" ")
  .map((v) => +v);

let arr = [];
const maxLen = 2 ** N;
for (let i = 0; i < maxLen; i++) {
  arr.push(input().split(" "));
}

const op1 = (level) => {
  const l = 2 ** level;
  const upsideDown = (x, y, len) => {
    for (let i = y; i < y + len; i++) {
      for (let j = 0; j < len / 2; j++) {
        const temp = arr[x + j][i];
        arr[x + j][i] = arr[x + len - j - 1][i];
        arr[x + len - j - 1][i] = temp;
      }
    }
  };
  for (let i = 0; i < maxLen; i += l) {
    for (let j = 0; j < maxLen; j += l) {
      upsideDown(i, j, l);
    }
  }
};
const op2 = (level) => {
  const l = 2 ** level;
  const leftSideRight = (x, y, len) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len / 2; j++) {
        const temp = arr[x + i][y + len - j - 1];
        arr[x + i][y + len - j - 1] = arr[x + i][y + j];
        arr[x + i][y + j] = temp;
      }
    }
  };
  for (let i = 0; i < maxLen; i += l) {
    for (let j = 0; j < maxLen; j += l) {
      leftSideRight(i, j, l);
    }
  }
};
const op3 = (level) => {
  const l = 2 ** level;
  let temp = new Array(maxLen)
    .fill(null)
    .map((_) => new Array(maxLen).fill(null));
  const rotate = (x, y, len) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        temp[x + j][y + len - i - 1] = arr[x + i][y + j];
      }
    }
  };
  for (let i = 0; i < maxLen; i += l) {
    for (let j = 0; j < maxLen; j += l) {
      rotate(i, j, l);
    }
  }
  arr = temp;
};
const op4 = (level) => {
  const l = 2 ** level;
  let temp = new Array(maxLen)
    .fill(null)
    .map((_) => new Array(maxLen).fill(null));
  const rotate = (x, y, len) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        temp[x + len - j - 1][y + i] = arr[x + i][y + j];
      }
    }
  };
  for (let i = 0; i < maxLen; i += l) {
    for (let j = 0; j < maxLen; j += l) {
      rotate(i, j, l);
    }
  }
  arr = temp;
};
const op5 = (level) => {
  const l = 2 ** level;
  const upsideDown = (x, y, len) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        const left = (Math.floor(maxLen / l) - Math.floor(x / l) - 1) * l + i;
        const temp = arr[left][y + j];
        arr[left][y + j] = arr[x + i][y + j];
        arr[x + i][y + j] = temp;
      }
    }
  };
  for (let i = 0; i < maxLen / 2; i += l) {
    for (let j = 0; j < maxLen; j += l) {
      upsideDown(i, j, l);
    }
  }
};
const op6 = (level) => {
  const l = 2 ** level;
  const leftSideRight = (x, y, len) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        const right = (Math.floor(maxLen / l) - Math.floor(y / l) - 1) * l + j;
        const temp = arr[x + i][right];
        arr[x + i][right] = arr[x + i][y + j];
        arr[x + i][y + j] = temp;
      }
    }
  };
  for (let i = 0; i < maxLen; i += l) {
    for (let j = 0; j < maxLen / 2; j += l) {
      leftSideRight(i, j, l);
    }
  }
};
const op7 = (level) => {
  const l = 2 ** level;
  let temp = new Array(maxLen)
    .fill(null)
    .map((_) => new Array(maxLen).fill(null));
  const rotate = (x, y, len) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        const newX = (Math.floor(maxLen / l) - Math.floor(x / l) - 1) * l;
        temp[y + i][newX + j] = arr[x + i][y + j];
      }
    }
  };
  for (let i = 0; i < maxLen; i += l) {
    for (let j = 0; j < maxLen; j += l) {
      rotate(i, j, l);
    }
  }
  arr = temp;
};
const op8 = (level) => {
  const l = 2 ** level;
  let temp = new Array(maxLen)
    .fill(null)
    .map((_) => new Array(maxLen).fill(null));
  const rotate = (x, y, len) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        const newY = (Math.floor(maxLen / l) - Math.floor(y / l) - 1) * l;
        temp[newY + i][x + j] = arr[x + i][y + j];
      }
    }
  };
  for (let i = 0; i < maxLen; i += l) {
    for (let j = 0; j < maxLen; j += l) {
      rotate(i, j, l);
    }
  }
  arr = temp;
};

for (let i = 0; i < R; i++) {
  const [type, level] = input()
    .split(" ")
    .map((v) => +v);

  if (type === 1) op1(level);
  if (type === 2) op2(level);
  if (type === 3) op3(level);
  if (type === 4) op4(level);
  if (type === 5) op5(level);
  if (type === 6) op6(level);
  if (type === 7) op7(level);
  if (type === 8) op8(level);
  //   console.log(type, level);
  //   for (let i of arr) {
  //     console.log(i.map((v) => v.padStart(3, " ")).join(""));
  //   }
  //   console.log("-------------------------------------");
}

for (let i of arr) {
  console.log(i.join(" "));
}
