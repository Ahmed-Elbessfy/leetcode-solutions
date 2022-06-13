/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let h = {}
    for(let n of arr){
        h[n] = ++h[n] || 1
    }
    let max = -1
  
    for(let n in h){
        if(h[n] == n && h[n] > max) max = n  
    }
    return max
};