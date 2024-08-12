// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:
// Input: n = 1
// Output: ["()"]

const generateParenthesis = (n) => {
  const solutions = [];

  const generate = (leftPCount, rightPCount, partial) => {
    //exit conditions
    //if (leftpcount>rightpcount) return; because when the function called recursivly it 
    //subtracted 1 from leftpcount, only when -1 from right pcount to make it even, then 
    //you can return a combo else it returns nothing
    // second point is: well formed parehtesis should always start from left parentheisis
    if (leftPCount > rightPCount) return;
    if (leftPCount === 0 && rightPCount === 0) {
      solutions.push(partial);
    }

    //logic
   if(leftPCount > 0) generate(leftPCount - 1, rightPCount, partial + "(");
   if(rightPCount > 0) generate(leftPCount, rightPCount - 1, partial + ")");
  };

  generate(n, n, "");

  return solutions;
};

console.log(generateParenthesis(3));
