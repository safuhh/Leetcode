/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
   let sum = 0;
   let count = 0;
   for(let i of nums){
    sum+= i;
    if(sum===0)count++;
   }
   return count;
};
console.log(returnToBoundaryCount([2,3,-5]))