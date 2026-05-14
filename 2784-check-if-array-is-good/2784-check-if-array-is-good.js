/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums.sort((a,b)=>a-b)
    let num = nums.length-1;
    for (let i= 0;i<num;i++){
        if(nums[i] !== i+1){
            return false;
        }
    }
    return nums[num]===num
};