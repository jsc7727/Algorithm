function solution(msg) {
  const answer = [];
  let nextWord = "";
  let lastCount = 2;
  const dir = { A: 0, B: 1 };
  const s = msg.split("").reduce((acc, cur) => {
    nextWord = acc + cur;
    if (dir[nextWord] === undefined) {
      dir[nextWord] = lastCount++;
    } else {
      return acc + cur;
    }
    if (dir[acc] !== undefined) answer.push(dir[acc]);
    return cur;
  });

  answer.push(dir[s]);

  return answer;
}
