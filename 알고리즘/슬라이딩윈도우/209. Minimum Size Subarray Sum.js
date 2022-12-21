/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let answer = Infinity;
  let sum = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (left < right && sum - nums[left] >= target) {
      sum -= nums[left++];
    }
    const temp = right - left + 1;
    if (sum >= target && answer > temp) {
      answer = temp;
    }
  }
  return sum < target ? 0 : answer;
};
