// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

//reference https://www.youtube.com/watch?v=Q_nBUVnfcD8
//t: o(n)
//s: o(n)
const houseRobber = (nums) => {
    //dp bottom up
    const n = dp.length;
    if(n=== 0) return 0;
    if(n ===1) return nums[0];
    const dp = new Array(n);
    dp[0]= nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i-1], nums[i]+dp[i-2]);
        
    }
    return dp[dp.length -1];
}