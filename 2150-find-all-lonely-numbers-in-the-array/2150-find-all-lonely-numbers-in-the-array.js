/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    return nums.sort((a,b) => a-b).filter((n,i) => {
         if(nums[i + 1] - nums[i] <= 1 || nums[i] - nums[i - 1] <= 1) return false;
        return true;
        
    })
};