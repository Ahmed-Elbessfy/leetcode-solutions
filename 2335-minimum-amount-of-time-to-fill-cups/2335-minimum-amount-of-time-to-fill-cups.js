/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let sum = amount.reduce((acc,c) => acc += c, 0),
        max = Math.max(...amount)
    
    return Math.max(max, Math.floor((sum + 1) / 2));
};