// Big-O = O(n) :: linear time complexity
const linearSearch = (arr, target) => {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([2, 5, 7, 1, 0, 3], 5)); // 1
console.log(linearSearch([4, 2, 11, 20, 1], 4)); // 0
console.log(linearSearch([5, 1, 4, 8, 9, 10], 12)); // -1
