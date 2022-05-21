/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let aInd = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] == "a") aInd = i
    }
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == "b" && i < aInd) return false
    }
    return true
};