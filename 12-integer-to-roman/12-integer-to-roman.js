/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    let roman = ""
    const syms = {
        1:"I",
        4:"IV",
        5:"V",
        9:"IX",
        10:"X",
        40:"XL",
        50:"L",
        90:"XC",
        100:"C",
        400:"CD",
        500:"D",
        900:"CM",
        1000:"M",
    }
    
    
     for(let fact of Object.keys(syms).reverse()){
        let repeat = Math.floor(num / fact)
        roman += syms[fact].repeat(repeat)
        num = num % fact
    }
    
  
    return roman
    
};