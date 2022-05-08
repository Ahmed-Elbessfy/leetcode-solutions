/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {

    let max = 0
    for(let i = 0; i < s.length; i++){
        let last = s.lastIndexOf(s[i])
        if(i != last){
            max = Math.max(max, last - i)
        }
    }
    
    return max -1
};