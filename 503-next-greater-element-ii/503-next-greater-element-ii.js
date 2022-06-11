/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    nums = [...nums, ...nums]
    let max  = Math.max(...nums),res = []
    for(let i = 0; i < nums.length / 2; i++){
        if(nums[i] == max) res.push(-1)
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] > nums[i]){
                res.push(nums[j])
                break;
            }
        }
        
    }
    
    return res
    
};