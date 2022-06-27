/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

var kClosest = function(points, k) {
    return points.sort((a,b) => {
         if(a[0] ** 2 + a[1] ** 2 > b[0] ** 2 + b[1] ** 2) return 1
        else return -1
    }).slice(0, k )
};