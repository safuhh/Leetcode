var maxDepth = function(s) {
  let sum = 0
  let maxDepth = 0

  for (let char of s) {
    if (char === '(') {
      sum++
    }

    if (sum > maxDepth) {
      maxDepth = sum
    }

    if (char === ')') {
      sum--
    }
  }

  return maxDepth
}
console.log(maxDepth("(1+(2*3)+((8)/4))+1"))