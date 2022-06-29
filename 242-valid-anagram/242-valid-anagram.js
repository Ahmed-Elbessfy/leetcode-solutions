/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if (s.length != t.length) return false
    let ch = new Map()
    
    for(let i = 0; i < s.length; i++){
      ch.set(s[i], ch.get(s[i] ) + 1 || 1)
    }
  


  
  for(let i = 0; i < t.length; i++){
    let l = t[i]
    
      if(ch.get(l) != undefined){
        ch.set(l, ch.get(l) - 1)
      }
    }
  

    
  
  for(let [k,v] of ch){
    if(v != 0) return false
  }
  return true 
};