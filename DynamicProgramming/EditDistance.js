
// Given two strings word1 and word2, return the minimum number 
//of operations required to convert word1 to word2.
// You have the following three operations permitted on a word:
// Insert a character
// Delete a character
// Replace a character
 
// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
 
//reference https://www.youtube.com/watch?v=HwDXH35lr0o

const buildTable =function(len1, len2){
    const table = [];
    for(let r = 0; r < len1+1; r++){
        table[r] = [];
        for(let c =0; c< len2+1; c++){
            table[r].push(0);
        }
    }

    for(let r =0; r < table.length;r++){
        table[r][0] = r;
        for(let c =0; c < table[r].length; c++ ){
            table[0][c] = c;
        }
    }


    return table;
}

const editDistance = (str1, str2) => {
   const table = buildTable(str1.length, str2.length);
   for(let r = 1; r < table.length; r++){
    for(let c = 1; c < table[r].length; c++){
        if(str1[r-1] === str2[c-1]){
            table[r][c] = table[r-1][c-1];
        }else{
            table[r][c] = 1 + Math.min(table[r][c-1], table[r-1][c], table[r-1][c-1]);
        }
    }
   }
   return table[table.length -1][table[0].length-1];
}

console.log(editDistance('horse', 'ros'));











