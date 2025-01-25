// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"
var longestPalindrome = function(s) {
  let longest = "";

function isPal(s, l, r){
  while(l >= 0 && r < s.length && s[l] === s[r]){
      l--;
      r++;
  }
  return s.slice(l+1, r);
}

for(let i = 0; i< s.length; i++){
  let oddPal = isPal(s,i, i);
  let evenPal = isPal(s, i, i+1);
  let currentLongest = oddPal.length > evenPal.length ? oddPal : evenPal;
  if(currentLongest.length > longest.length){
      longest = currentLongest
  }
}

return longest;

};

console.log(longestPallindrom("ccc"));