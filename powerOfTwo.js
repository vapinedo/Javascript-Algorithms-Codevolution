// Big-O = O(1)
const isPowerOfTwoBitwise = (n) => {
    if (n < 1) { return false; }
    return (n & (n-1)) === 0;
};

// Big-O = O(logn)
// const powerOfTwo = (n) => {
//     if (n > 1) { return false; }
//     while(n > 1) {
//         if (n % 2 !== 0) {
//             return false;
//         }
//         n = n/2;        
//     }
//     return true;
// };

console.log(isPowerOfTwoBitwise(1)); // true
console.log(isPowerOfTwoBitwise()); // true
console.log(isPowerOfTwoBitwise(5)); // false