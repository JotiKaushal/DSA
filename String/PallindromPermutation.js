// Given a string, we need to print all possible palindromes that can be generated using letters of that string. Examples:

// Input:  str = "aabcb"
// Output: abcba bacab

// Input:  str = "aabbcadad"
// Output: aabdcdbaa aadbcbdaa abadcdaba
//         abdacadba adabcbada adbacabda
//         baadcdaab badacadab bdaacaadb
//         daabcbaad dabacabad dbaacaabd

function isPalindrome(x) {
    return  x === x.split('').reverse().join('');//+helps in converting string in integer
}
const stringPermutation = (str) => {
    if(str.length == 1)
      {
        return [str];
      }else if(str.length == 2){
        return [str, str[1] + str[0]]
      }
      let result = [];

      for (let i = 0; i < str.length; i++) {
        let tempPermutation = 
        stringPermutation(str.slice(0,i)+str.slice(i+1)).map(val => str[i]+val);  
        result.push(...tempPermutation);
      }
      return result;
}
//JavaScript set() Method: This method sets a new object type with ES6 (ES2015) that allows you to create collections of unique values.
const getPallindromPermutations = function(str){
    let allPermutations = stringPermutation(str);
    return [...new Set(allPermutations)].filter(x => isPalindrome(x) === true)
}

console.log(getPallindromPermutations("aabbcadad"));