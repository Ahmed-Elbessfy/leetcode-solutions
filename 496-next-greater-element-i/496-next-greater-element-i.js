/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [], max = Math.max(...nums2)
    for(let n of nums1){
        if(n != max) {
            let ind = nums2.indexOf(n),g = n
        
            for(let i = ind+1; i < nums2.length; i++){
                if(nums2[i] > g ) {
                    g = nums2[i]
                    break
                }
            }

            if(g == n) ans.push(-1)
            else ans.push(g)
        } else {
            ans.push(-1)
        }
        
    }
    return ans
};