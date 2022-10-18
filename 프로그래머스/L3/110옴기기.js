function solution(s) {
  const getCountWitharr = (str) => {
    let count = 0;
    const arr = [];
    for (let i of str) {
      if (
        arr.length >= 2 &&
        i === "0" &&
        arr[arr.length - 1] === "1" &&
        arr[arr.length - 2] === "1"
      ) {
        arr.pop();
        arr.pop();
        count++;
      } else {
        arr.push(i);
      }
    }
    return [count, arr];
  };
  let checker = (count, arr) => {
    let addStr = "";
    for (let i = 0; i < count; i++) addStr += "110";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "1") {
        if (i + 1 < arr.length && arr[i + 1] === "0") continue;
        return arr.slice(0, i).join("") + addStr + arr.slice(i).join("");
      }
    }
    return arr.join("") + addStr;
  };
  return s.map((v) => {
    return checker(...getCountWitharr(v));
  });
}
