// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


// Complexity
// Time complexity:
// O(n * k log k) : n=>number of strings and k=>max length of string in the array
// Space complexity:
// O(n)

var groupAnagrams = function(strs) {
    const seen={},arr=[]
    for(let i=0;i<strs.length;i++){
        const index= strs[i].split('').sort().join('');
        if(seen[index]){
            seen[index].push(strs[i])
        }else{
            seen[index]=[strs[i]]
        }
    }

    for(let i in seen){
        arr.push(seen[i])
    }
    return arr
};


console.log(groupAnagrams(
    ["eat","tea","tan","ate","nat","bat"]
    ));