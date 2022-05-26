/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let h = {}
    
    for(let w of words) h[w] = ++h[w] || 1
    
    return Object.keys(h).sort((a,b) => {
        // sort by repeating times
        if(h[b] > h[a]) return 1
        if(h[b] < h[a]) return -1
        // sort alphbitecally 
        if(b > a) return -1
        if(a > b) return 1
    }).splice(0,k)
};