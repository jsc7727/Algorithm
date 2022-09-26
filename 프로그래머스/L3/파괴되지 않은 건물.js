// function solution(board, skill) {
//     let count = board.length * board[0].length;
//     const addSum = (x1,y1,x2,y2,value) =>{
//         for(let x = x1 ; x <= x2;x++){
//             for(let y = y1; y<= y2;y++){
//                 if(board[x][y] > 0 && (board[x][y]+value) <= 0){
//                     count--;
//                 }
//                 else if(board[x][y] <= 0 && (board[x][y]+value) > 0){
//                     count++;
//                 }
//                 board[x][y]+=value
//             }
//         }
//     }
//     for(let sk of skill){4
//         let [type, x1,y1,x2,y2, degree] = sk;
//         if(type === 1) degree = -degree
//         addSum(x1,y1,x2,y2,degree);
//     }
//     return count;
// }

function solution(board, skill) {
  const xLen = board.length;
  const yLen = board[0].length;
  let dp = new Array(xLen + 1)
    .fill(null)
    .map((_) => new Array(yLen + 1).fill(0));
  const addSum = (x1, y1, x2, y2, value) => {
    dp[x1][y1] += value;
    dp[x1][y2] += -value;
    dp[x2][y1] += -value;
    dp[x2][y2] += value;
  };
  for (let sk of skill) {
    let [type, x1, y1, x2, y2, degree] = sk;
    if (type === 1) degree = -degree;
    addSum(x1, y1, x2 + 1, y2 + 1, degree);
  }

  for (let i = 0; i <= xLen; i++) {
    for (let j = 1; j <= yLen; j++) {
      dp[i][j] += dp[i][j - 1];
    }
  }

  for (let j = 0; j <= yLen; j++) {
    for (let i = 1; i <= xLen; i++) {
      dp[i][j] += dp[i - 1][j];
    }
  }

  let count = 0;
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      dp[i][j] += board[i][j];
      if (dp[i][j] > 0) {
        count++;
      }
    }
  }

  return count;
}
