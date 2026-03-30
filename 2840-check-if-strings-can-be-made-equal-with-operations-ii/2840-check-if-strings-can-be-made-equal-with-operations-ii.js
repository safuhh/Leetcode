/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    let s1even = [];
    let s2even = []
    let s1odd = []
    let s2odd = []
    for(let i=0;i<s1.length;i++){
        if(i % 2==0){
            s1even.push(s1[i])
            s2even.push(s2[i])
        }else{
            s1odd.push(s1[i])
            s2odd.push(s2[i])
        }
    }
    s1even.sort()
    s2even.sort()
    s1odd.sort()
    s2odd.sort()
    return (
        s1even.join('')===s2even.join("") && s1odd.join("")===s2odd.join("")
    )
};