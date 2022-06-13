/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let h = new Map()
    for(let n of arr){
        h.set(n, h.get(n) + 1 || 1)
    }
    let max = -1
  
    for(let [n,c] of h.entries()){
        if(c == n && n > max) max = c  
    }
    return max
};