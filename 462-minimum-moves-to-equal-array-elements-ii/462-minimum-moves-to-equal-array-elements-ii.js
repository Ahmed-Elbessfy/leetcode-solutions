/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a,b) => a - b)
    let med = nums.at(Math.floor(nums.length / 2))
    let steps = 0
    for(let n of nums){
        steps = steps + Math.abs(med - n)
    }
    return steps
};