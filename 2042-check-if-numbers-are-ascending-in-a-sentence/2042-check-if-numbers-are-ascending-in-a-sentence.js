/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    s = s.split(" ").filter(n => parseInt(n))
    for(let i = 0; i < s.length - 1; i++){
        if(parseInt(s[i]) >= parseInt(s[i+1])) return false
    }
    return true
};