/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const getDist = arr =>  Math.sqrt((arr[0] ** 2) + (arr[1] ** 2))
var kClosest = function(points, k) {
    return points.sort((a,b) => {
        let distA = getDist(a), distB = getDist(b)
        if(distA > distB) return 1
        else return -1
    }).slice(0, k )
};