/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let h1 = {}, res = []
    for(let n of nums1){
        h1[n] = ++h1[n] || 1
    }
    for(let n of nums2){
        h1[n] = --h1[n] || h1[n]
        if(h1[n] >= 0) res.push(n)
    }
    return res
};