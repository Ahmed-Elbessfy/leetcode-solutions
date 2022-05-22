/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let hash = {}
    for(let i = lowLimit; i <= highLimit; i++){
        let eqN = 0
        for(let n of String(i)) eqN += parseInt(n)
        // console.log(i, eqN)
        hash[eqN] = hash[eqN] ? ++hash[eqN] : 1
        
    }
    return Math.max(...Object.values(hash))
};