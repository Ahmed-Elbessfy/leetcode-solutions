/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let s = String(num), max = "-1"
    for(let i = 0; i < s.length - 2; i++){
        if(s[i] === s[i + 1] && s[i+1] === s[i+2] && parseInt(s.substring(i,i+3)) > parseInt(max)) {
           max = s[i] + s[i+1] + s[i+2]
        }
    }
    return max.length < 3 ? "" : max
};