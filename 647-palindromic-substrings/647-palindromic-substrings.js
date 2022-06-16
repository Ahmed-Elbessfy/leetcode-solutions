/**
 * @param {string} s
 * @return {number}
 */

const getPalCount = (s, start, end) => {
    let count = 0
    while(start >= 0 && end <= s.length){
        if(s[start] != s[end]) break
        count += 1
        start--
        end++   
    }
    return count
}

const getPal = (s,c) => {
    // start with 1 since the letter itself is a plaindrome 
    let count = 1
    // plaindrome with ODD length
//     let start = c - 1, end = c + 1
//     while(start >= 0 && end <= s.length){
//         if(s[start] != s[end]) break
//         count += 1
//         start--
//         end++
        
//     }
    count += getPalCount(s,c -1, c + 1)    
    // palindrome with EVEN length
    count += getPalCount(s, c, c + 1)
    return count
}

var countSubstrings = function(s) {
    let count = 0
    for(let i = 0; i < s.length; i++){
        count += getPal(s,i)
    }
    return count
};