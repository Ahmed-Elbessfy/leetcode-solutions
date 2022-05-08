/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let repeats = {}
    nums.forEach(n => repeats[n] = ++repeats[n] || 1)
    // console.log(repeats)
    for(let n in repeats) {
        if (repeats[n] != 1) return n
    }
    
      // if(new Set([...nums]).size == 1) return nums[0]
    // return [...nums].filter((n,i) => nums.lastIndexOf(n) !== i)
};