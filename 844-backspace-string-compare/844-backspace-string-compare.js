/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    let sm = [],tm = []
    for(let i = 0; i < s.length; i++){
        if(s[i] == "#") sm.pop()
        else sm.push(s[i])
    }
    
    for(let i = 0; i < t.length; i++){
        if(t[i] == "#") tm.pop()
        else tm.push(t[i])
    }
    return sm.join("") == tm.join("")
};