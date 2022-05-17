/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.filter(n => String(n).length % 2 === 0 && n > 9).length
};