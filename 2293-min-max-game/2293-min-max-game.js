/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    while(nums.length != 1){
        let temp = [],newC = 0
        for(let i = 0; i < nums.length; i += 2, newC++){
            if(newC % 2 == 0) temp.push(Math.min(nums[i], nums[i+1]))
            else temp.push(Math.max(nums[i], nums[i+1]))
        }
        nums = temp
    }
    return nums[0]
};