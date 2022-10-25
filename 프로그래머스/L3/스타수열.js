// 0~ a , a

function solution(a) {
  const arr = new Array(10).fill(null).map((_) => [-1]);
  for (let i = 0; i < a.length; i++) {
    arr[a[i]].push(i);
  }
  const check = (arr) => {
    let answer = 0;
    for (let i of arr) {
      i.push(a.length);
      let flag = true;
      let count = 0;
      console.log(i);
      for (let j = 1; j < i.length - 1; j++) {
        if (i[j] - i[j - 1] > 1 && flag === true) {
          // console.log("-1",i[j]-i[j-1] )
          flag = true;
          count += 2;
        } else if (i[j + 1] - i[j] > 1) {
          // console.log("-2",i[j+1]-i[j] )
          if (i[j + 1] - i[j] === 2) flag = false;
          else flag = true;
          count += 2;
        }
      }
      answer = Math.max(answer, count);
    }
    return answer;
  };
  return check(arr);
}
