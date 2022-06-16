/**
 * @param {string} s
 * @return {string}
 */
const getPalLength = (s, start, end) => {
    
    while(start >= 0 && end <= s.length){
        if(s[start] != s[end]) break
        else{
            start--
            end++
        }
    }
    // console.log(start, end, s.substr(start,end + 1) )
    return s.substring(start + 1, end )
}
const getPal = (s,c) => {
    // console.log("odd: ", getPalLength(s, c - 1, c + 1))
    let odd = getPalLength(s, c - 1, c + 1), 
        even = getPalLength(s, c, c + 1)
    return odd.length > even.length ? odd : even
}
var longestPalindrome = function(s) {
    let maxPal = ""
    for(let i = 0; i < s.length; i++){
        if(getPal(s,i).length > maxPal.length) maxPal = getPal(s,i)
    }
    return maxPal
        
};