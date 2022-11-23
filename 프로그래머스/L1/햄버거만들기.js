function solution(ingredient) {
  var answer = 0;
  let stack = [];
  for (let i of ingredient) {
    stack.push(i);
    while (stack.length >= 4) {
      const res = stack.slice(stack.length - 4);
      if (res.join("") === "1231") {
        stack.splice(stack.length - 4, 4);
        answer++;
      } else {
        break;
      }
    }
  }
  return answer;
}
