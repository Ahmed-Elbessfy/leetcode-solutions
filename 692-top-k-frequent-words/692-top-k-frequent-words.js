/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let h = {}
    for(let w of words) h[w] = ++h[w] || 1
    let arr =  Object.keys(h).sort((a,b) => {
        // console.log(a,b, h[a], h[b], b > a)
        if(h[b] > h[a]) return 1
        if(h[b] < h[a]) return -1
        if(b > a) return -1
        if(a > b) return 1
        
        
    
    })
        
    console.log(arr)
        return arr.splice(0,k)
};