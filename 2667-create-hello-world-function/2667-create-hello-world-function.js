/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function() {
        return "Hello World";
    };
};
let a = createHelloWorld();
console.log(a());

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */