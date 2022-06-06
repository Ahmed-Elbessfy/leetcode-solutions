/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    
    for(let arr of operations){
        let ind = nums.indexOf(arr[0])
        nums.splice(ind, 1 , arr[1])
    }
    return nums
};