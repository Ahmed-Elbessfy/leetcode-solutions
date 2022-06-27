/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let ind = -1, dist = 100000


    for(let i = 0; i < points.length; i++){
        let point = points[i]
        if(point[0] === x || point[1] === y){
            if(Math.abs(x - point[0]) + Math.abs(y - point[1])  < dist){
                dist = Math.abs(x - point[0]) + Math.abs(y - point[1]) 
                ind = i
            }
        } 
    }

    
    return ind
    
    
    
    
};