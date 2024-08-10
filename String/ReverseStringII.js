// Given a string s and an integer k, reverse the first k characters 
//for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. 
//If there are less than 2k but greater than or equal to k characters, 
//then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

var reverseStr = function(s, k) {
    const chars = s.split(""); // Convert string to array of characters
  const n = chars.length;
  
  for (let i = 0; i < n; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1); // Handle cases where there are fewer than k characters left
    
    while (left < right) {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }

  return chars.join(""); // Convert array back to string
};

console.log( reverseStr("abcdefg", 2));