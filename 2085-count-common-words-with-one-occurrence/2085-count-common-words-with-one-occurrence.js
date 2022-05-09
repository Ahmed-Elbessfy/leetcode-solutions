/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let c = 0, r1 = {} 
    for(let i = 0; i < words1.length; i++){
        r1[words1[i]] = ++r1[words1[i]] || 1
    }
    
    for(let i = 0; i < words2.length; i++){
        r1[words2[i]] = r1[words2[i]] ? r1[words2[i]] * 10 + 1 : 0
    }
    
    
    for(let word in r1){
        if(r1[word] == 11) c++
    }
    return c
};