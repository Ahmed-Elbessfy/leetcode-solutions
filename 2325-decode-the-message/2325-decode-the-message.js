/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let hl = new Map(), workKey = [...new Set(key.split(" ").join(""))], res = ""

    for(let i = 0; i < workKey.length; i++){
        hl.set(workKey[i], String.fromCharCode(i+97))
    }
  
    // console.log(message)
    for(let i = 0; i < message.length; i++){
        // console.log(message[i], hl.get(message[i]))
        res += hl.get(message[i]) || " "
        // console.log(message, i, message[i] , hl[message[i]])
    }
    // console.log(res)
    return res
};