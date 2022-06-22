/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(nums.length == 1) return nums
    let h = new Map()
    for(let n of nums){
        h.set(n, h.get(n) + 1 || 1)
    }
    console.log(h)
    let res = []
    h.forEach((k,v) => {
        res.push([v,k])
    })
    console.log(res.sort((a,b) => b.v - a.v))
    return res.sort((a,b) => b[1] - a[1]).splice(0,k).map(arr => arr[0])
};