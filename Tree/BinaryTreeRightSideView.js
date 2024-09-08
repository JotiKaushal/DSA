// Given the root of a binary tree, imagine yourself standing on the right side of it, 
// return the values of the nodes you can see ordered from top to bottom.

// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:
// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:
// Input: root = []
// Output: []

//https://www.youtube.com/watch?v=Uub7EVnp0P8
//using BFS approac
//TC: o(n) SC: o(n)
var getRightSideView = (root) =>{
if(!root) return[];
let queue = [root];
let res = [];

while(queue){
    let level = [];
    let levelLength = queue.length;
    while(levelLength){
        let curr = queue.shift();
    if(curr.left) queue.push(curr.left);
    if(curr.right) queue.push(curr.right);
    level.push(curr.val)
    levelLength--;
    }
    res.push(level[level.length-1])
}

return res;



}