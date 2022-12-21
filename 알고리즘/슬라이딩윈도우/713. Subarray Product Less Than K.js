/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k === 0) return 0;
  let ans = 0;
  let prod = 1;
  for (let i = 0, j = 0; j < nums.length; j++) {
    prod *= nums[j];
    while (i <= j && prod >= k) {
      prod /= nums[i++];
    }
    ans += j - i + 1;
  }
  return ans;
};
