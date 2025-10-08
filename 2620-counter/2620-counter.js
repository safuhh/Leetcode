/**
 * @param {number} n
 * @return {Function} counter
 */
 
var createCounter = function(n) {
    
    return function() {
        return n++;
        
    };
};
let count = createCounter(5);
console.log(count);

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */