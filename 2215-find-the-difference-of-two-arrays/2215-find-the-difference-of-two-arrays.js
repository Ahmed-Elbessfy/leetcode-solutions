/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let r1 = [], r2 = []
    for(let i of nums1){
        if(!nums2.includes(i) && !r1.includes(i)) r1.push(i)
    }
    
    
    for(let i of nums2){
        if(!nums1.includes(i) && !r2.includes(i)) r2.push(i)
    }
    
    return [r1,r2]
};