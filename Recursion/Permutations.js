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
    let result = [];
    let temp =[]; 
    permuteRec(nums, temp, result); 
    return result; 
             
};

function permuteRec(nums, temp, result) { 
    console.log('temp0', temp); 
    //if we match length then we have all th permutations
    if (temp.length === nums.length) { 
            result.push([...temp]); 
        return; 
    } 
    //iterate thru all elements
    for (let i = 0; i < nums.length; i++) { 
        //if number already exist in temp skip it
        if(temp.indexOf(nums[i]) > -1){continue;}
        //add the element to temp
      temp.push(nums[i]);
      console.log('temp1', temp);
      
      //find permutations for other elements
      permuteRec(nums, temp, result);
      //remove the element
      temp.pop();
      console.log('temp2', temp);
    } 
}

console.log(permute([1,2]));
