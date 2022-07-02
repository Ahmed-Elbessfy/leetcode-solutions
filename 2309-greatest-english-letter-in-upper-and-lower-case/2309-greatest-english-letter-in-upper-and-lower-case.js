/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    return s.split("").filter((l,i) => s.charCodeAt(i) < 91 && s.indexOf(l.toLowerCase()) != -1).sort().at(-1) || ""
};