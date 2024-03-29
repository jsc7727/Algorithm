const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `8 9
    0 0 0 0 0 0 0 0 0
    0 0 0 1 1 0 0 0 0
    0 0 0 1 1 0 1 1 0
    0 0 1 1 1 1 1 1 0
    0 0 1 1 1 1 1 0 0
    0 0 1 1 0 1 1 0 0
    0 0 0 0 0 0 0 0 0
    0 0 0 0 0 0 0 0 0`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();
