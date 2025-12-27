/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res = [];
    let i = 0;
    while(i<arr.length){
        let re = arr.slice(i,i+size)
        res.push(re)
        i+=size   
    }
    return res;
};
