/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let h = new Map()
    for(let n of arr){
        h.set(n, h.get(n) +1 || 1)
    }
    
    let counts = [...h.values()], uniCounts = new Set(counts)
    return counts.length == uniCounts.size
};