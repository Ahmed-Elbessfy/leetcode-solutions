/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let l = coordinates.charCodeAt(0), n = parseInt(coordinates[1], 10) 
  
    
    return l % 2 !== 0 ? n % 2 === 0 : n % 2 !== 0
    
};