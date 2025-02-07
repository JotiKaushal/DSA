// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

// Example 1:

// Input: s = "1 + 1"
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

//Constraints:

// 1 <= s.length <= 3 * 105
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.
// '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
// '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
// There will be no two consecutive operators in the input.
// Every number and running calculation will fit in a signed 32-bit integer



//=========
// Intuition
// The problem requires evaluating a mathematical expression given as a string.
// We need to handle addition, subtraction, and parentheses. To solve this problem,
// we can use a stack to keep track of intermediate results while traversing the string.

// Approach
// Initialize variables num, sign, and res to keep track of the current number being processed, 
//the sign of the current expression, and the result of the calculation, respectively.
// Iterate through the characters of the string s.
// If the current character is a digit, update num accordingly to form the current number
// being processed.
// If the current character is '+', add the current number to the result res with the 
//appropriate sign, reset num to 0, and set sign to 1 (positive).
// If the current character is '-', add the current number to the result res with the 
//appropriate sign, reset num to 0, and set sign to -1 (negative).
// If the current character is '(', push the current result res and the sign sign
// onto the stack, reset res to 0, and set sign to 1 (positive) for the expression 
//inside the parentheses.
// If the current character is ')', calculate the result of the expression inside the parentheses. Multiply the result 
//by the sign on top of the stack and add it to the current result res. Pop both the result and sign from the stack.
// After iterating through the string, add the final number to the result res with the appropriate sign.
// Return the final result res.
// Complexity
// Time Complexity: O(n), where n is the length of the string s. We iterate through 
//each character of the string once.
// Space Complexity: O(n) in the worst case, where n is the length of the string s. 
//This is due to the stack used to store intermediate results and signs.
var basicCalculator = function(s) {
    let stk = [];
    let num = 0, sign = 1, res = 0;

    for (let ch of s) {
        if (!isNaN(parseInt(ch))) {
            num = num * 10 + parseInt(ch);
            console.log('num', num);
            
        } else if (ch === '+') {
            res += sign * num;
            num = 0;
            sign = 1;
            console.log('+ res', res);
        } else if (ch === '-') {
            res += sign * num;
            num = 0;
            sign = -1;
            console.log('- res', res);
        } else if (ch === '(') {
            stk.push(res);
            stk.push(sign);
            res = 0;
            sign = 1;
            console.log('stk', stk);
        } else if (ch === ')') {
            res += sign * num;
            num = 0;
            console.log(') res', res);
            console.log('stk', stk);
            res *= stk.pop();
            console.log(') res', res);
            console.log('stk', stk);
            res += stk.pop();
            console.log(') res', res);
            console.log('stk', stk);
        }
    }
        
    return res + sign * num;
};

console.log(basicCalculator('(1+(4+5+2)-3)+(6+8)'));
