/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var a = 0;
    return function() {
        a = n++
        return a;

    };
};
let count =createCounter()
console.log(count())
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */