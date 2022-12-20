const nums = [-1, 0, 1, 2, -1, -4];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let answer = [];
    nums.sort((a,b)=>a-b);
    for(let i = 0 ; i < nums.length-2; i++){
        let left = i+1;
        let right = nums.length-1;
        if(nums[i] === nums[i-1]) continue;
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                answer.push([nums[i],nums[left],nums[right]]);
                while(left < right && nums[left] == nums[left+1]) left++;
                while(left < right && nums[right] == nums[right-1]) right--;
                left++;
                right--;
            }
            else if(sum > 0){
                right--;
            }
            else{
                left++;
            }
        }
    }
    return answer;
threeSum(nums);
