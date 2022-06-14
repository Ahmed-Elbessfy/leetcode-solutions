/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hr = new Map(), hm = new Map()
    for(let l of ransomNote){
        hr.set(l, hr.get(l) +1 || 1)
    }
    
    for(let l of magazine){
        hm.set(l, hm.get(l) + 1 || 1)
    }
    // console.log(hr, hm, hm.get("b") >= hr.get("b"))
    for(let [l,c] of hr){
        if(!hm.get(l) || hm.get(l) < c) return false
    }
    
    return true
};