// Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
//that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. 
//Note that 1 does not map to any letters.
// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

// Time complexity: O(3^N) [ As most of the letters has 3 choices so we can approximately
//say time complexity as 3^N]

// Space Complexity: O(N) [ N is the size of the given string. This is because we
//can only process till i < s.size() , that's why Space Complexity is O(N)]

//https://www.youtube.com/watch?v=qyHlIdxk820 <== for reference

var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
  // create a map for numbers and corressponding strings
    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const output = [];// result array
    //recursive method : current is string, index is the digit
    const backtrack = (current, index) => {
        //base case if index reaches the end
        if (index === digits.length) {
            output.push(current);
            return;
        }
        // get string value for digit
        const letters = keyboard[digits[index]];
        //iterate thru all letter
        for (let letter of letters) {
            //back tracking
            backtrack(current + letter, index + 1);
        }
    };

    backtrack('', 0);
    return output;
};

console.log(letterCombinations('23'));
