/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
     let sc = []
     ops.forEach((n,i) => {
         if(n == "C") {
             sc.pop()
         } else if (n == "D"){
             sc.push(2 * sc.at(-1))
         } else if (n == "+"){
             sc.push(sc.at(-1) + sc.at(-2)) 
         } else {
             sc.push(Number(n))
         }     
     })
    return sc.reduce((a,c) => a + c, 0)
};