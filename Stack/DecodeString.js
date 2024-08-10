// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"


var decodeString = function(str) {
    /*
        we have 4 possibilities
        1) opening braces -> new sequence starts, so 
        add curr string and curr number to the stack, reassign both
        to initial values
        2) closing braces -> the sequence is over, it is time to create a substring
        by getting prev string and prev number from the stack, add prev string(repeated prev num times)
        to curr string
        3) if it is number add to curr num
        4) if it is char add to curr string
    */
    let stack = [];
    let currStr = '';
    let currNum = 0;
    
    for (let i = 0; i < str.length; i ++) {
        if (str[i] === '[') {
            stack.push(currStr);
            stack.push(currNum);
            currStr = '';
            currNum = 0;
        } else if (str[i] === ']') {
            let prevNum = stack.pop();
            let prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum);
        } else if (str[i] >= '0' && str[i] <= '9') {
            currNum = currNum * 10 + Number(str[i]);
        } else {
            currStr += str[i];
        }
    }
    
    return currStr;
}