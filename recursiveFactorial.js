// Big-O = O(n) :: linear time complexity
const recursiveFactorial = (n) => {
  // console.log(n);
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(4)); // 1
console.log(recursiveFactorial(5)); // 120
