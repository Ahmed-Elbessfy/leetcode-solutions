/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    // create cells 
    let cells = []
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            cells.push([r,c])
        }
    }
    // console.log(cells)
    return cells.sort((a,b) => {
        // console.log(a,Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter),b, Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter))
        if (Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter) > Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter)) return 1
        else return -1
    })
};