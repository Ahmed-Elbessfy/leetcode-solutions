/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // console.log(mat)
    let res = 0
    for(let i = 0; i < mat.length / 2; i++){
        let firstInd = i, endInd = mat.length - 1 - i
//         console.log(i, firstInd, endInd)
//         // from the begininng 
//         console.log("from the beginning ")
//         console.log(mat.at(i)[firstInd], mat.at(i)[endInd])
        
        
//         console.log("from the end")
//         console.log( mat[mat.length - 1 - i][firstInd], mat[mat.length - 1 - i][endInd])
        if(firstInd != endInd){
            res = res + mat.at(i)[firstInd]+ mat.at(i)[endInd] + mat[mat.length - 1 - i][firstInd]+ mat[mat.length - 1 - i][endInd]
        } else {
            // we are in the middle of the matrix 
            res += mat.at(i)[firstInd]
        }
        
    }
    return res
};

// [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
