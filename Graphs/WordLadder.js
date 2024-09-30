// A transformation sequence from word beginWord to word endWord using a dictionary wordList is 
//a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words 
//in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog",
// which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 
//m = length of word
//n = number of words
//TC: o(m^2*n)
//SC: o(m^2*n)

//reference: https://www.youtube.com/watch?v=-wfwmzznzHQ
const ladderLength = (beginWord, endWord, wordList) =>{
  let set = new Set(wordList);
  let queue = [[beginWord, 1]];
  while(queue.length){
    const [currWord, count] = queue.shift();

    if(currWord === endWord) return count;
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < currWord.length; j++) {
       let letter = String.fromCharCode(97 + i);
       let newWord = currWord.slice(0,j) + letter + currWord.slice(j+1);
       if(set.has(newWord)){
        queue.push([newWord,count+1]);
        set.delete(newWord);
      }
    }
        
    }
  }
  return 0;
}




