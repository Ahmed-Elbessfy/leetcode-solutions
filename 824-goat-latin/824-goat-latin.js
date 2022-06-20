/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    return sentence.split(" ").map((word,i) => {
        let as = "ma" + "a".repeat(i+1)
         if(!"aeiou".includes(word[0].toLowerCase())) word = word.substr(1,) + word[0]
        word += as
        return word
    }).join(" ")
};