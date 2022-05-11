/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
//     let r1 = [], r2 = []
//     for(let i of nums1){
//         if(!nums2.includes(i) && !r1.includes(i)) r1.push(i)
//     }
    
    
//     for(let i of nums2){
//         if(!nums1.includes(i) && !r2.includes(i)) r2.push(i)
//     }
    
    return [[...new Set(nums1.filter(n => !nums2.includes(n)))], [...new Set(nums2.filter(n => !nums1.includes(n)))]]
};