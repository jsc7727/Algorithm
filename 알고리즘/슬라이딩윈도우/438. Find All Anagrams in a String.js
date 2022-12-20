/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const dict = {};
  const pDict = {};
  let left = 0;
  let right = 0;

  const asDict = (dict, type, i) => {
    if (type === true) {
      if (dict.hasOwnProperty(i)) dict[i]++;
      else dict[i] = 1;
    } else {
      dict[i]--;
      if (dict[i] === 0) delete dict[i];
    }
  };

  for (let i of p) {
    asDict(pDict, true, i);
  }
  const compare = () => {
    for (let [key, value] of Object.entries(dict)) {
      if (key in pDict && pDict[key] === value) continue;
      else return false;
    }
    return true;
  };

  let answer = [];

  while (right < s.length) {
    if (right - left < p.length - 1) {
      asDict(dict, true, s[right]);
      right++;
    } else {
      asDict(dict, true, s[right]);
      if (compare(dict, pDict) === true) answer.push(left);
      asDict(dict, false, s[left]);
      right++;
      left++;
    }
  }
  return answer;
};

const s = "abab";
const p = "ab";
const res = findAnagrams(s, p);
console.log(res);
