/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    
    let n = new Map()
    for(let [s,d] of paths){
        n.set(s,d)
        n.set(d, n.get(d) || null)
        // console.log(n)
    }
    for(let [s,d] of n){
        // console.log(s,d)
        if(n.get(s) == null) return s
    }
};