/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    for(let i = nums.length -1; i >= 0; i--){
        nums.splice(i, 1, nums.slice(0,i+1).reduce((acc,cur) => acc + cur,0))
    }
    return nums
};