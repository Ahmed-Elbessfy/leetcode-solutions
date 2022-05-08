/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {

    let max = 0
    for(let i = 0; i < s.length; i++){
        let last = s.lastIndexOf(s[i])
        if(i != last){
            // console.log("max change")
            max = Math.max(max, last - i)
        }
        // console.log(i, last, max)
    }
    
    return max -1
};