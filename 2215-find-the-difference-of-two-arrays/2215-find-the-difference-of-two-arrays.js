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
    
//     let ans1=new Set(nums1)
// nums2.forEach(v=>{ans1.delete(v)})
// let ans2=new Set(nums2);
// nums1.forEach(v=>{ans2.delete(v)})

// return ([[...ans1], [...ans2]]);
    
    // return [[...new Set(nums1.filter(n => !nums2.includes(n)))], [...new Set(nums2.filter(n => !nums1.includes(n)))]]
    
    let s1 = new Set(nums1), s2 = new Set(nums2)
    nums2.forEach(n => s1.delete(n))
    nums1.forEach(n => s2.delete(n))
    return [[...s1],[...s2]]
    
};