/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    for(let r  = 0; r < matrix.length; r++){
        let row = new Set(),col = new Set()
        for(let c = 0; c < matrix[0].length; c++){
            row.add(matrix[r][c])
            col.add(matrix[c][r])
        }

        if(row.size != matrix[0].length || col.size != matrix.length) return false
    }
    return true
};