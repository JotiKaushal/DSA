// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
// // reference https://www.youtube.com/watch?v=UY0VxSzpuN0


const wordBreak = (s, wordDict) => {
//BFS TC: o(n^3)
//s: 0(n)
let visited = new Set();
let set = new Set(wordDict);
let queue = [0];

while(queue.length){
    let current = queue.shift();
    if(!visited.has(current)){
        for (let i = current+1; i <= s.length; i++) {
            if(set.has(s.slice(current, i)))
            {
                if(i === s.length){
                    return true
                }
                queue.push(i);
            }
            
        }
        visited.add(current);
    }
}
return false;
}