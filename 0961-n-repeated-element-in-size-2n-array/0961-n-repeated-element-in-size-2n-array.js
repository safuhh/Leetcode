/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const frq = {};
    for(i of nums){
        if(!frq[i]){
            frq[i]=0
        }
        frq[i]++
        if (frq[i] > 1) { 
            return i; 
        }
    }
};