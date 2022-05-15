/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
      let h = {}
      for(let n of arr){
          h[n] = ++h[n] || 1
      }
    let uni = Object.keys(h).filter(n => h[n] == 1)
    return uni.length >= k ? uni[k-1] : ""
};