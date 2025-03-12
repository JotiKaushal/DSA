// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
 //reference https://www.youtube.com/watch?v=IftXURT0kq4


 const  longestIncreasingSubIteration = (nums) => {
    let dp = new Array(nums.length).fill(1);
    for(let i = 1; i < nums.length; i++){
        for(let j = i; j >= 0; j--){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[j]+1, dp[i]);
            }
        }
    }
    return Math.max(...dp);
 }
//[10,9,2,5,3,7,101,18]
 const lengthOfLIS = (nums) => {
    const subsequence = [];
  
    for (const currentNumber of nums) {
      if (
        subsequence.length === 0 ||
        currentNumber > subsequence[subsequence.length - 1]
      ) {
        subsequence.push(currentNumber);
      } else {
        let idx = lowerBound(subsequence, currentNumber);
        subsequence[idx] = currentNumber;
        console.log(currentNumber);
        console.log(subsequence);
        console.log(idx)
      }
    }
  
    return subsequence.length;
  };
  
  // Find the first element that is greater than or equal to the target
  const lowerBound = (subsequence, target) => {
    let left = 0;
    let right = subsequence.length - 1;
    let ans = 0;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (subsequence[mid] >= target) {
        ans = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return ans;
  };


  console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))