/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let max  = 0
    for(let i = 0; i < words.length; i++){
        let curr = words[i]
        for(let j = i + 1; j < words.length; j++){
            if(curr.split("").every(l => !words[j].includes(l))){
                max = Math.max(max, curr.length * words[j].length)
            }
        }
    }
    
    return max
};