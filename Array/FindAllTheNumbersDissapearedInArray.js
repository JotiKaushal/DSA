// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

var findDissapearedNumbers = function(nums){
    const disArr = new Set(nums);    
    const result = [];
      
    for (let i = 1; i <= nums.length; i++) {
      if(!disArr.has(i)) {
          result.push(i);
          }
      }
      return result; 
}
//time complexity: O(n)
//space complexity: O(n)
console.log(findDissapearedNumbers([1,1]));
