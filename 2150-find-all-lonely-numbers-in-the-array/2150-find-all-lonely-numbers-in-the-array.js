/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    
    let h = {}, lon = []
    for(let n of nums){
        h[n] = h[n] + 1 || 1
    }

    for(let i in nums){
        let n = nums[i], next = n + 1, prev = n - 1
        if(h[n] == 1 && !h[next] && !h[prev]){
            lon.push(n)
        }
    }
    return lon
    
};