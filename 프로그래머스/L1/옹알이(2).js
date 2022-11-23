function solution(babbling) {
  const checkList = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  for (let i of babbling) {
    let stack = "";
    let prev = "";
    for (let j of i) {
      stack += j;
      if (stack !== prev && checkList.includes(stack)) {
        prev = stack;
        stack = "";
      }
    }
    if (stack.length === 0) answer++;
  }
  return answer;
}
