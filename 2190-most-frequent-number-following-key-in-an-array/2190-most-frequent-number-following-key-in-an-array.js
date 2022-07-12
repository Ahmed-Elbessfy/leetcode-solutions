/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    let rep = new Map(), maxRep = 0, repCount = 0
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] == key){
            rep.set(nums[i+1], rep.get(nums[i+1]) + 1 || 1)
        }
    }

    
    for(let [key, val] of rep){
        if(val > repCount){
            repCount = val
            maxRep = key
        }
    }
    return maxRep
};