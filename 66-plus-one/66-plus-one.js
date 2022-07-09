/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let bn = BigInt(digits.join("")) + 1n + ""
    return (bn).split("")
};