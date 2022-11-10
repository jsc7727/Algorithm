function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => b - a);
  arrayB.sort((a, b) => b - a);
  const callback = (v, arrA, arrB) => {
    return arrA.every((el) => el % v === 0) && arrB.every((el) => el % v !== 0);
  };
  const getAnswer = (arrA, arrB) => {
    for (let i = arrA[0]; i >= 1; i--) {
      if (callback(i, arrA, arrB) === true) return i;
    }
    return 0;
  };
  const a = getAnswer(arrayA, arrayB);
  const b = getAnswer(arrayB, arrayA);
  return Math.max(a, b);
}
