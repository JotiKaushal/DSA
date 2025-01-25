// // Given a string, we need to print all possible palindromes that can be generated using letters of that string. Examples:

// // Input:  str = "aabcb"
// // Output: abcba bacab

// // Input:  str = "aabbcadad"
// // Output: aabdcdbaa aadbcbdaa abadcdaba
// //         abdacadba adabcbada adbacabda
// //         baadcdaab badacadab bdaacaadb
// //         daabcbaad dabacabad dbaacaabd

// function isPalindrome(x) {
//     return  x === x.split('').reverse().join('');//+helps in converting string in integer
// }
// const stringPermutation = (str) => {
//     if(str.length == 1)
//       {
//         return [str];
//       }else if(str.length == 2){
//         return [str, str[1] + str[0]]
//       }
//       let result = [];

//       for (let i = 0; i < str.length; i++) {
//         let tempPermutation = 
//         stringPermutation(str.slice(0,i)+str.slice(i+1)).map(val => str[i]+val);  
//         result.push(...tempPermutation);
//       }
//       return result;
// }
// //JavaScript set() Method: This method sets a new object type with ES6 (ES2015) that allows you to create collections of unique values.
// const getPallindromPermutations = function(str){
//     let allPermutations = stringPermutation(str);
//     return [...new Set(allPermutations)].filter(x => isPalindrome(x) === true)
// }

// console.log(getPallindromPermutations("aabbcadad"));


const getAllPermutations = function (s) {
  //below two are the break conditions of recursive calls
  if (s.length === 1) return [s]
  else if (s.length === 2) return [s, s[1] + s[0]]
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let permutations = getAllPermutations(s.slice(0, i) + s.slice(i + 1)).map(val => s[i] + val);
    result.push(...permutations);
  }
  return result;
}

const isPallindrome = function(s){
  return s === s.split("").reverse().join("");
}


const getAllPallindromPermutation = function (s) {
let allPermutations = getAllPermutations(s);
  return [...new Set(allPermutations)].filter(x => isPallindrome(x) === true);
}

console.log(getAllPallindromPermutation('aabdcdbaa'));
