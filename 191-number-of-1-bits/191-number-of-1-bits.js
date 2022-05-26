/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let c = 0
    for(let l of n.toString(2)){
        if(l == "1") c++
    }
    return c
};