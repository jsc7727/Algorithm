const bSearch = (arr, v) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = ((right + left) / 2) | 0;
    console.log(left, right, mid);
    if (arr[mid] === v) {
      return mid;
    } else if (v < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

function solution(n, goal) {
  console.log(goal);
  console.log(bSearch([5, 4, 3, 2, 1], 4));
  //   var answer = 0;
  //   for (let i = 1; i <= n; i++) {
  //     // const c = goal.indexOf(i);
  //     const c = bSearch(goal, i);
  //     if (c >= 0) {
  //       goal.splice(c, 1);
  //       answer += c;
  //     }
  //   }
  //   return answer;
}

solution(5, [1, 2, 3, 4, 5]);
