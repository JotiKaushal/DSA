// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses
// substring
// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0
// time complexity: O(n)
//space complexity: O(n)

const longestValidParenthesis = (s) => {
    if (s === "") return 0;
    if (s.length === 1) return 0;
    let max = 0;
  let stack = [-1];// to handle edge case '()' if do not set -1 result will be 0, 
  //if we set it to 0 result will be 1
    for (let i = 0; i < s.length; i++) {
      if(s[i] === '('){
          stack.push(i);
      }else{
          stack.pop();
          if(stack.length === 0){
            stack.push(i);// to setup a starting point
          }else{
              max = Math.max(max, i - stack[stack.length - 1]);
          }
      }
    }
    return max;
};

//check this also moving forward and backward using two poiunters open and close forward if close is greate then open reset counter, moving backwards if open is greater than close reset counters. keep maxLength = open+close if open and close is same

console.log(longestValidParenthesis(')()'));

