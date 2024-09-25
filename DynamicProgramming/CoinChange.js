// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination 
//of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:
// Input: coins = [1], amount = 0
// Output: 0
//reference https://www.youtube.com/watch?v=NNcN5X1wsaw

// Approach
// This solution uses dynamic programming.

// Initialize a dynamic programming (DP) array dp with size amount + 1.
// Each element in dp represents the minimum number of coins required to make up the corresponding amount.
// Set the base case: dp[0] is set to 0, as we don't need any coins to make up an amount of 0.
// Iterate over each amount from 1 to amount. For each amount i, iterate over each coin in the coins list.
// If we can use the current coin to make up the amount i, update the dp value for that amount. The updated value is the minimum of the current dp[i] and dp[i - coin] + 1, where dp[i - coin] represents the minimum number of coins required to make up the amount i - coin using all the coins except the current coin.
// After the outer loop, check if the final value in the dp array is not equal to infinity. If it's not, return the final value. Otherwise, return -1, indicating that it's not possible to make up the amount using the given coins.
// Complexity
// Time complexity:
// O(n∗amount), where n is the length of the coins list. This is because of nested loops.

// Space complexity:
// O(amount), as we only need to store the dp array.



var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    
    // Base case: if we have 0 amount, we don't need any coins
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            // If we can use this coin to make up the amount, update dp value
            if (i - coin >= 0) {
                console.log(dp[i]);
                console.log(dp[i - coin]+ 1);
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    // Return the final value in dp array or -1 if it's not possible
    return dp[amount] !== Infinity ? dp[amount] : -1;
};

console.log(coinChange([1,2,5], 11));