/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let c = 0
    logs.forEach(l => {
        if(l == "../"){
            if (c > 0) c--
        } else if (l != "./" && l != "../"){
            c++
        } 
    })
    
    return c 
};