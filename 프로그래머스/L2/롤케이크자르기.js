function solution(topping) {
  var answer = 0;
  const leftVisited = new Array(10001).fill(0);
  const rightVisited = new Array(10001).fill(0);
  for (let i of topping) {
    if (rightVisited[i]++ === 0) {
      rightVisited[0]++;
    }
  }
  for (let i of topping) {
    if (--rightVisited[i] === 0) {
      rightVisited[0]--;
    }
    if (leftVisited[i]++ === 0) {
      leftVisited[0]++;
    }
    if (leftVisited[0] === rightVisited[0]) answer++;
  }
  return answer;
}
