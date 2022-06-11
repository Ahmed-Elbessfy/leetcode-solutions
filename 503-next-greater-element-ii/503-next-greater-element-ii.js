/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    // duplicate nums length to perfrom the circular operation
    nums = [...nums, ...nums]
    // store max value to spare at least one loop
    let max  = Math.max(...nums),res = []
    // loop only to the middle of the new nums length (( the length of the original nums ))
    for(let i = 0; i < nums.length / 2; i++){
        // use the max value, if the current N is the max 
        if(nums[i] == max) {
            res.push(-1)
        } else {
            for(let j = i + 1; j < nums.length; j++){
                if(nums[j] > nums[i]){
                    res.push(nums[j])
                    break;
                }
            }
        }
    }
    
    return res
    
};