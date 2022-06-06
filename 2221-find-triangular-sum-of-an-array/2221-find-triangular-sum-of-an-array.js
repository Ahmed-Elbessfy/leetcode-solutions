/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    if(nums.length == 1) return nums[0]
    while(nums.length > 1){
        let newArr = []
        for(let i = 0; i < nums.length - 1; i++){
            let newN = (nums[i] + nums[i+1]) % 10
            newArr.push(newN)
        }
        nums = newArr
    }
    return nums
};