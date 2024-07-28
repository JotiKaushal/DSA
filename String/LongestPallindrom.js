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

const getDrom = (left, right, s) =>{
    while(left >= 0 && right < s.length){
        if(s[left] !== s[right]) break;
        left--;
        right++;
    }
    return[left+1, right];
}

const longestPallindrom = (s) =>{
let max = [0, 1];
for (let i = 0; i < s.length; i++) {
    const even = getDrom(i-1, i, s);
    const odd = getDrom(i-1, i+1, s);
    const currentMax = odd[1] - odd[0] > even[1] - even[0]? odd: even;
    max =  currentMax[1] - currentMax[0] > max[1] - max[0]? currentMax: max;
    
}
return s.slice(max[0], max[1]);

}

console.log(longestPallindrom("babad"));