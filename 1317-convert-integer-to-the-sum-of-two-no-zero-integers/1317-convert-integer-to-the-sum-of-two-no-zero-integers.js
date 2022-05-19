/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let i = 1
    while(i != n){
        let m = n - i
        if(!String(m).includes("0") && !String(i).includes("0")) return [i,m]
        i++
    }
};