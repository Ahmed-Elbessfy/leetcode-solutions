/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let hash = {}
    for(let i = lowLimit; i <= highLimit; i++){
        let eqN = String(i).split("").reduce((ac,n) => ac += parseInt(n),0)
        // console.log(i, eqN)
        hash[eqN] = hash[eqN] ? ++hash[eqN] : 1
        
    }
    return Math.max(...Object.values(hash))
};