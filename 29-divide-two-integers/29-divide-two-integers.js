/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    if(dividend / divisor > 2 ** 31 - 1) return 2 ** 31 - 1
    if(dividend / divisor < 2 ** 31 * - 1) return 2 ** 31 * - 1
    
    return Math.floor(dividend / divisor) >= 0 ? Math.floor(dividend / divisor) :  Math.ceil(dividend / divisor)
};