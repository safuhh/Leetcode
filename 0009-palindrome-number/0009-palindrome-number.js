/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0){
        return false;
    }
  let number=x.toString().split('').reverse().join('')
  return number===x.toString();
};