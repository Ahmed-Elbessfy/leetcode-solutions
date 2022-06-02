/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let rowN = matrix[0].length
    let res = []
   
    for( let i = 0; i < rowN; i++){
        res[i] = []
        for(let j = 0; j < matrix.length; j++){
            res[i][j] = matrix[j][i]
        }
    }
    return res

};