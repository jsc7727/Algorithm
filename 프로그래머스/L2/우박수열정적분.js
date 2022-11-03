function solution(k, ranges) {
  var answer = [];
  const arr = [k];
  while (k > 1) {
    if (k % 2 === 0) k /= 2;
    else k = k * 3 + 1;
    arr.push(k);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = (arr[i] + arr[i + 1]) / 2;
  }
  arr.pop();
  for (let [start, end] of ranges) {
    let sum = 0;
    for (let i = start; i < arr.length + end; i++) {
      sum += arr[i];
    }
    if (start - end > arr.length) {
      answer.push(-1);
    } else answer.push(sum);
  }
  return answer;
}
