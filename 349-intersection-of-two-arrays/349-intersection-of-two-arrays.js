/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = []
    nums1.forEach(n => {
        if(nums2.includes(n) && !res.includes(n)) res.push(n)
    })
    return res
};