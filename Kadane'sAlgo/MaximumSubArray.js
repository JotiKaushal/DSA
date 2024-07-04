//Given integer array nums, find subarray with largest sum and retur its sum
//input [-2,1,-3,4,-1,2,1,-5,4] output: 6 [4,-1,2,1]
//input [5,4,-1,7,8] output: 23 [5,4,-1,7,8]

// function maxSubarraySum(nums) {
//   let maxSum = nums[0];
//   let startIndex  = 0;
//   let endIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       currentSum = currentSum + nums[j];
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         startIndex = i;
//         endIndex = j;
//       }
//     }
//   }
//   return {maxSum:maxSum,subArray: nums.slice(startIndex,endIndex+1)};
// }
//Brut force algo
//time complexity: o(n)*o(n)=o(n^2)
//space: o(1)

//optimized solution
//kadane logic:
/*
sum +=num[i]
sum > max?
max = sum
sum< 0?
sum = 0 <== reset sum to 0
*/

function maxSubarraySum(nums) {
  if(nums.length === 0) return 0;
  let sum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    console.log('i', i);
    sum += nums[i];
    console.log('sum', sum);
    if (sum > maxSum) {
      maxSum = sum;
      console.log('maxSum', maxSum);
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}
//time complexity: o(n)
//space: o(1)

console.log('result', maxSubarraySum([-3,-2,0,-1]));
