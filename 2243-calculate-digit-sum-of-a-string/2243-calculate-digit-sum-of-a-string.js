/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    if(s.length <= k ) return s
    let newS = ""
    for(let i = 0; i < s.length; i += k){
        let temp = s.slice(i,i+k), c = 0
        for(let n of temp) c+= parseInt(n)
        newS += String(c)
    }
    return digitSum(newS,k)
};