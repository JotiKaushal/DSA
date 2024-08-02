// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// right and left are pointers in the string -- for the maxLength = Math.max.... line we could also do ...Math.max(maxLength, right - left + 1) but set.size could make more sense for some people.

// Explanation is under the code.

var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  
  let left = 0, right = 0;
  let maxLength = -Infinity;
  const set = new Set();

  while (right < s.length) {
    // If s[right] has not been seen yet
    if (!set.has(s[right])) {
      // Add it to the set
      set.add(s[right]);
      // Increase size of window to right
      right++;
      // Update maxLength; set size represents length of unique substring
      maxLength = Math.max(maxLength, set.size);
    } else {
      // We've seen s[right] so we need to shrink the window
      // Delete s[left] from set
      set.delete(s[left]);
      // Shrink window from left
      left++;
    }
  }

  return maxLength;
 }

 console.log(lengthOfLongestSubstring("abbc"));
 
// For example, in "abbc":

// left = 0, right = 0, s[right] = a, s[left] = a

// set does not contain a, add to set
// set = [a]
// Update maxLength to 1
// Increment right
// left = 0, right = 1, s[right] = b, s[left] = a

// set does not contain b, add to set
// set = [a, b]
// Update maxLength to 2
// Increment right
// left = 0, right = 2, s[right] = b, s[left] = a

// set already contains b
// Delete s[left] from set
// set = [b]
// Increment left
// left = 1, right = 2, s[right] = b, s[left] = b

// set already contains b
// Delete s[left] from set
// set = []
// Increment left
// left = 2, right = 2, s[right] = b, s[left] = b

// set does not contain b, add to set
// set = [b]
// maxLength does not change, since 1 < 2
// Increment right
// left = 2, right = 3, s[right] = c, s[left] = b

// set does not contain c, add to set
// set = [b, c]
// maxLength does not change, since 2 === 2
// Increment right
// right = 4, which is out of bounds of the while loop

// Exit loop and return maxLength