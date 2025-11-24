/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    const map ={
        ')':"(",
        "}":"{",
        "]":"["
    }
    for(let i of s ){
        if(map[i]){
            if(stack.pop()!==map[i]){
                return false;
            }
        }
        else{
            stack.push(i);
        }
    }
    return stack.length ===0;
};