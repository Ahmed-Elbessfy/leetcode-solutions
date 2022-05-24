/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let res = new Array(queries.length)
    for(let i = 0; i < queries.length; i++){
        let df = queries[i][0], ind = queries[i][1]
        nums[ind] += df
        // console.log(df, ind, nums)
        res[i] = nums.reduce((ac,n) => n % 2 == 0 ? ac += n : ac,0)
        // console.log(res)
    }
    return res
};