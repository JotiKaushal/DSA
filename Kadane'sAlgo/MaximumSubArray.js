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
sum = 0
max = -infinity
for loop
sum +=num[i]
max = math.max(sum, max)
sum< 0?
sum = 0 <== reset sum to 0
end loop
return max
*/

function maxSubarraySum(nums) {
  let sum = 0,
  max = -Infinity;
if (nums.length === 1) return nums[0];
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  max = Math.max(max, sum);

  if (sum < 0) {
    sum = 0;
  }
}
return max;
}
//time complexity: o(n)
//space: o(1)

console.log('result', maxSubarraySum([-3,-2,0,-1]));
