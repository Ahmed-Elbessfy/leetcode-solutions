/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // let repeats = {}
    // nums.forEach(n => repeats[n] = ++repeats[n] || 1)
    // // console.log(repeats)
    // for(let n in repeats) {
    //     if (repeats[n] != 1) return n
    // }
    
    const map = new Map()    
let res = 0;

for(let n of nums){
    map.set(n, map.get(n) + 1 || 1)
}

map.forEach((value, key) => {
    if(value > 1){
        res = key
    }
})

return res
    
};