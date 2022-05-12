/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
     let ref = [...nums[0]]
     for(let i = 1; i < nums.length; i++){
         ref = ref.filter(n => nums[i].includes(n))
     }
    return ref.sort((a,b) => a-b)
};