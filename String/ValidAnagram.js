/*
Question: Valid anagram
A anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all original
letters exactly once.

input: s = 'anagram' t = 'nagaram' output: true
       s= rat, t = car  output: false
*/

//brut force
function isAnagram1(s, t) {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(isAnagram1("cat", "rat"));

//object approach
function isAnagram2(s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
     obj1[s[i]] = (obj1[s[i]]||0) + 1;
     obj2[t[i]] = (obj2[t[i]]||0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key])return false
  }
  return true;
}

console.log(isAnagram2("cat", "rat"));
