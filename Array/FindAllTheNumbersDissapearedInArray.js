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


//https://www.youtube.com/watch?v=CTBEcmzLAuA
//time complexity: O(n)
//space complexity: O(1)  You may assume the returned list does not count as extra space.

var disapperaedNums = function(nums){
if(nums.length === 0) return 0;
for(let i =0; i < nums.length; i++){
    let j = Math.abs(nums[i]) - 1;
    nums[j] = Math.abs(nums[j]) * -1;
}
 let result =[];

 for(let i =0; i< nums.length;i++){
    if(nums[i] > 0){
        result.push(i+1)
    }
 }
 return result;
}