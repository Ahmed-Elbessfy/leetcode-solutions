/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let countAvail = false, symC = 0, astC = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === "|") symC++
        
        countAvail = symC % 2 == 0
        
        if(s[i] === "*" && countAvail ) astC++
        
    }
    
    return astC
};