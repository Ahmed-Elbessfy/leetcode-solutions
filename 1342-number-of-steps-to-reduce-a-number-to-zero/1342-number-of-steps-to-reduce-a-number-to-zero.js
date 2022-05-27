/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let c = 0
    while(num > 0){
        num % 2 == 0 ? num /= 2 : num -= 1
        c++
    }
    return c
};