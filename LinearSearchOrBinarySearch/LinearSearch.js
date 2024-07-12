/*
Question: Implement Linear search in javascript
Write a function to search "target" in nums. If target exists, then return its index.
otherwise return -1. You must write an algorithm with O(n) runtime complexity

Input nums = [4,5,6,7,0,1,2] target=0 output = 4
      nums = [4,5,6,7,0,1,2] target = 3 output = -1
*/

//time complexity= O(n)
//space complexity = O(1)
const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  return -1;
};


//Global linear search
//time complexity= O(n)
//space complexity = O(n)
const globalLinearSearch = (nums, target) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      if (target === nums[i]) {
        result.push(i);
      }
    }
    return result.length === 0 ? result: -1;
  };


console.log(linearSearch([4,5,6,7,0,1,2], 3));
console.log(globalLinearSearch([4,5,6,7,0,1,2,0], 0));