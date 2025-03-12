// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways 
// can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//dynamic programmimg bottom up approach, how many ways we can climb steps
//step 1: 1 [1]
//step 2: 2  [1,1] [2]
//step 3: 3   [1,1,1] [2,1] [1,2]
//step 4: 5    [1,1,1,1] [2,1,1] [2,2] [1,2,1] [1,1,2]
//if you see each step is the sum of last two steps
//TC:O(n) SC: O(n)
//reference: https://www.youtube.com/watch?v=Ifek5h5VqJw
// Approach
// The approach of the below code is to solve the problem of counting the number of ways to climb stairs using Dynamic Programming by implementing the Fibonacci Sequence.
// The function calculates the nth number in the fibonacci sequence using a for loop, where n is the number of stairs.
// The first two numbers in the sequence are initialized as 1 and the next numbers are calculated as the sum of the previous two numbers.
// The result, the nth number, is returned as the answer to the number of ways to climb stairs.
const climbingStairs = (n) => {
    let dp = [];
    //base cases 
   dp[1] = 1;
   dp[2] = 2;
   for (let i = 3; i < n; i++) {
     dp[i] = dp[i - 1]+ dp[i - 2];
   }
   return dp[n];
}

console.log(climbingStairs(4));