/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let t = new Map(), a = new Map()
    target.forEach(n => t.set(n, t.get(n) +1 || 1))
    arr.forEach(n => a.set(n, a.get(n) +1 || 1))
    
    for(let [k,v] of t){
        if(a.get(k) != v || a.get(k) == undefined) return false
    }
    
    return true
};