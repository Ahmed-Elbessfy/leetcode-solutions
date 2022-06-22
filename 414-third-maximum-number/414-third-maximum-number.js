/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let uni = [...new Set(nums)]
    uni.sort((a,b) => b - a)
    return uni.length > 2 ? uni[2] : uni[0]
};