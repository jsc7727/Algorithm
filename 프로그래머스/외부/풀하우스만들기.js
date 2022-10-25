function solution(cards) {
  var answer = 0;
  let dict = {};
  let jokerCount = 0;
  const makeHouse = () => {
    const arr = Object.entries(dict);
    arr.sort((a, b) => a[1] - b[1]);
    if (arr.length === 0 && jokerCount >= 5) {
      jokerCount = 0;
      dict = {};
      answer++;
    } else if (arr.length === 1) {
      const a = arr[arr.length - 1];
      const aCount = Math.min(3, a[1]);
      if (aCount + jokerCount >= 5) {
        dict = {};
        jokerCount = 0;
        answer++;
      }
    } else if (arr.length >= 2) {
      const a = arr[arr.length - 1];
      const b = arr[arr.length - 2];
      const aCount = Math.min(3, a[1]);
      const bCount = Math.min(3, b[1]);
      if (aCount + bCount + jokerCount >= 5) {
        dict = {};
        jokerCount = 0;
        answer++;
      }
    }
  };
  for (let card of cards) {
    if (card === 0) {
      jokerCount++;
    } else {
      if (dict.hasOwnProperty(card)) {
        dict[card]++;
      } else {
        dict[card] = 1;
      }
    }
    makeHouse();
  }
  return answer;
}
