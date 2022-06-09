/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let f = 0, s = numbers.length - 1
    
    while(f <= s){
        if (numbers[f]  + numbers[s] == target) return [f+1,s+1]
        if(numbers[f]  + numbers[s] > target){
            s--
        } else {
            f++
        }
    }
    
    
//     for(let i = 0; i < numbers.length; i++){
//         let curr = numbers[i]
//         for(let j = i + 1; j < numbers.length; j++){
//             if(curr + numbers[j] == target) return [i + 1, j + 1]
//         }
        
//     }
};