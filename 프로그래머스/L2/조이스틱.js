// https://school.programmers.co.kr/learn/courses/30/lessons/42860

// 테스트케이스 중요

// 테스트 1
// 입력값 〉	"JEROEN"
// 기댓값 〉	56
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 2
// 입력값 〉	"JAN"
// 기댓값 〉	23
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 3
// 입력값 〉	"AAAAABBAAAAAAABAAA"
// 기댓값 〉	16
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 4
// 입력값 〉	"ABABAAAAABA"
// 기댓값 〉	10
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 5
// 입력값 〉	"ABAAAAAAAAABB"
// 기댓값 〉	7
// 실행 결과 〉	테스트를 통과하였습니다.

function solution(name) {
  const change = (v) => {
    let up = v.charCodeAt() - 65;
    let down = 26 - up;
    return Math.min(up, down);
  };
  let arr = name.split("").map((el) => change(el));
  const sum = arr.reduce((a, b) => a + b);
  let answer = Infinity;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];
    if (temp === sum) {
      answer = Math.min(sum + i, answer);
    }
    let idx = 0;
    let temp2 = temp;
    for (let j = arr.length - 1; j > i; j--) {
      temp2 += arr[j];
      if (temp2 === sum) {
        const left = i;
        const right = arr.length - j;
        answer = Math.min(sum + left * 2 + right, answer);
        answer = Math.min(sum + right * 2 + left, answer);
        break;
      }
    }
  }
  return answer;
}
