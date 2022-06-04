/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let stand = ""
    for(let i = 1; i <= matrix.length; i++) stand += i
//     for(let r = 0; r < matrix.length; r++){
//         // row check 
//         let curr = matrix[r].sort((a,b) => a - b).join("")
//         if(stand!= curr) return false

//     }
//     // column check 
//     for(let c = 0; c < matrix.length; c++){
//         let tem = ""
//         for(let r = 0; r < matrix.length; r++){
//             tem += matrix[c][r]
//         }
//         if(tem != stand) return false
//     }
    
    
    
    for(let r  = 0; r < matrix.length; r++){
        let row = [],col = []
        for(let c = 0; c < matrix[0].length; c++){
            row.push(matrix[r][c])
            col.push(matrix[c][r])
        }
        console.log(row, col)
        if(row.sort((a,b) => a - b).join("") != stand || col.sort((a,b) => a - b).join("") != stand) return false
    }
    return true
};