// function solution(beginning, target) {
//     var answer = 0;
//     const xLen = beginning.length;
//     const yLen = beginning[0].length;
//     const reverse = (arr,x,y,direct) => {
//         if(direct === 0){
//             for(let i = 0 ; i < xLen; i++) arr[i][y] = arr[i][y] === 0 ? 1 : 0;
//         }
//         else{
//             for(let i = 0 ; i < yLen; i++) arr[x][i] = arr[x][i] === 0 ? 1 : 0;
//         }
//     }
//     const check = (arr,x,y,direct) => {
//         let count = 0;
//         if(direct === 0){
//             for(let i = 0 ; i < xLen; i++) count += arr[i][y]
//         }
//         else{
//             for(let i = 0 ; i < yLen; i++) count += arr[x][i]
//         }
//         if(count === 0 || count === direct===0?xLen:yLen) return true;
//         return false;
//     }
//     const checkTarget = (arr) =>{
//         for(let i = 0 ; i < xLen; i++)
//             for(let j = 0 ; j < yLen ; j++)
//                 if(arr[i][j] !== target[i][j]) return false;
//         return true;
//     }

//     for(let x = 0 ; x < xLen; x++){
//         if(beginning[x][0] !== target[x][0]){
//             reverse(beginning,x,0,1)
//             answer++;
//         }
//     }
//     // console.log(beginning)
//     for(let y = 0 ; y < xLen; y++){
//         if(beginning[0][y] !== target[0][y]){
//             reverse(beginning,0,y,0)
//             answer++;
//         }
//     }
//     // for(let i of beginning)
//     //     console.log(i)
//     // console.log()
//     // for(let i of target)
//     //     console.log(i)
//     // console.log(answer)
//     return checkTarget(beginning) === true ? answer : -1;
// }

function solution(beginning, target) {
  let answer = Infinity;
  const xLen = beginning.length;
  const yLen = beginning[0].length;

  const check = (x_bit, y_bit) => {
    for (let r = 0; r < xLen; r++) {
      const x_check = (x_bit & (1 << r)) > 0 ? 1 : 0;
      for (let c = 0; c < yLen; c++) {
        const y_check = (y_bit & (1 << c)) > 0 ? 1 : 0;
        const status = beginning[r][c] + x_check + y_check - target[r][c];
        if (status % 2 === 1) return false;
      }
    }
    return true;
  };

  const count = (bit) => {
    let cnt = 0;
    while (bit > 0) {
      if (bit & 1) {
        cnt++;
      }
      bit >>= 1;
    }
    return cnt;
  };

  for (let x_bit = 1; x_bit < 1 << xLen; x_bit++) {
    for (let y_bit = 1; y_bit < 1 << yLen; y_bit++) {
      if (check(x_bit, y_bit)) {
        answer = Math.min(answer, count(x_bit) + count(y_bit));
      }
    }
  }
  return answer < Infinity ? answer : -1;
}

const res = solution(
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
  ]
);
console.log(res);
