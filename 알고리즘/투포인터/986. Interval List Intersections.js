// https://leetcode.com/problems/interval-list-intersections/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (fl, sl) {
  let left = 0;
  let right = 0;
  let answer = [];
  while (left < fl.length && right < sl.length) {
    const a = Math.max(fl[left][0], sl[right][0]);
    const b = Math.min(fl[left][1], sl[right][1]);
    if (a <= b) {
      answer.push([a, b]);
    }
    if (fl[left][1] < sl[right][1]) {
      left++;
    } else {
      right++;
    }
  }
  return answer;
};

const firstList = [
  [0, 5],
  [12, 14],
  [15, 18],
];

const secondList = [
  [11, 15],
  [18, 19],
];

const res = intervalIntersection(firstList, secondList);
console.log(res);
