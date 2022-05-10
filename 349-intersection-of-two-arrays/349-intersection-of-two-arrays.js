/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let fil = nums1.filter(n => nums2.includes(n))
    return [...new Set([...fil])]
};