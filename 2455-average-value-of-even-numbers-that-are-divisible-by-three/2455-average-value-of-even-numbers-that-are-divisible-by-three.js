/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum=[]
    let a = nums.filter((n)=>n%2===0 && n%3===0 )
     if (a.length === 0) return 0;
     sum = a.reduce((x,y)=>x+y,0)
    let avg = Math.floor(sum/a.length);
    return avg;
    
};