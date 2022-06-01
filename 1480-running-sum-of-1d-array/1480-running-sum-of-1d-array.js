/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = []
    nums.forEach((n,i) => res.push(nums.slice(0,i+1).reduce((acc,cur) => acc + cur,0)))
    return res
};