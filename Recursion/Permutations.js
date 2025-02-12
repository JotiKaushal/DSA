// Given an array nums of distinct integers, return all the possible permutations. 
//You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

// Approach
//https://www.youtube.com/watch?v=H232aocj7bQ&t=103s
// Complexity
// Time complexity: (O(n!))

// We generate (n!) permutations, where (n) is the length of the input list.
// Space complexity: (O(n))

// The maximum depth of the recursion is (n), and we use additional space for the current 
//path and slicing operations.
// Code
var permute = function(nums) {
    const result = [];
function backtrack(nums, path){
    if(nums.length === 0)
 {   result.push(path);
 return;
}
    for(let i =0; i < nums.length;i++){
        backtrack([...nums.slice(0,i), ...nums.slice(i+1)], [...path, nums[i]])
    }
}
backtrack(nums, [])
return result;

};
console.log(permute([2,3,1]));
