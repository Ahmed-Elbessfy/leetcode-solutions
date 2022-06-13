/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = []
    for(let n of nums1){
        
        let ind = nums2.indexOf(n),g = n
        
        for(let i = ind+1; i < nums2.length; i++){
            if(nums2[i] > g ) {
                g = nums2[i]
                break
            }
        }
        
        if(g == n) ans.push(-1)
        else ans.push(g)
    }
    return ans
};