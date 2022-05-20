/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let h = {}
    for(let n of new Set(nums1)){
        if(h[n]) h[n].push('nums1')
        else h[n] = ["nums1"]
        // console.log(h,n)
    }
    // console.log("h after 1", h)
   
    for(let n of new Set(nums2)){
        if(h[n] ) h[n].push('nums2')
        else h[n] = ["nums2"]
        // console.log(h,n)
    }
   
    for(let n of new Set(nums3)){
        if(h[n]) h[n].push('nums3')
        else h[n] = ["nums3"]
        // console.log(h,n)
    }
    
    // console.log(h)
    return Object.keys(h).filter(n => h[n].length > 1)
};