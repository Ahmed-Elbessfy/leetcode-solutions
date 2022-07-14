/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
//     return nums.sort((a,b) => a-b).filter((n,i) => {
//         let inc = n + 1, dec = n - 1, next = nums[i+1], prev = nums[i-1]
//         console.log(n, inc, dec, prev, next, inc != next , inc != prev , dec != next , dec != prev , n != next , n != prev)
//         if(inc != next && inc != prev && dec != next && dec != prev && n != next && n != prev) return n
        
//     })
    
    let h = {}, lon = []
    for(let n of nums){
        h[n] = h[n] + 1 || 1
    }
    // console.log(h)
    for(let i in nums){
        let n = nums[i], next = n + 1, prev = n - 1
        if(h[n] == 1 && !h[next] && !h[prev]){
            lon.push(n)
        }
    }
    return lon
    
};