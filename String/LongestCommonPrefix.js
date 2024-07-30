// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    strs.sort();
 for (let i = 0; i < strs[0].length; i++) {
   if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
 }
 return strs[0];
};

console.log(longestCommonPrefix(["dog","racecar","car"]));