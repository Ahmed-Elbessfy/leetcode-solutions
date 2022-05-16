/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let result = []
    
    if(s.length % k !== 0) s = s.concat(fill.repeat(k - s.length % k))
   
    for(let i = 0; i < s.length; i += k){
        result.push(s.slice(i,i+k))
    }
    
    return result
};