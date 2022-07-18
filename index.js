// Big-O O(n) :: linear time complexity
const fibonacci = (n) => {
    const fibList = [0, 1];
    for (let i=2; i<n; i++) {
        fibList[i] = fibList[i-1] + fibList[i-2];
    }
    return fibList;
};

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));