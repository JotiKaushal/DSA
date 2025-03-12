// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest
// path from the root node down to the farthest leaf node.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:
// Input: root = [1,null,2]
// Output: 2
//https://www.youtube.com/watch?v=vT2ySdkTn0k
//https://www.youtube.com/watch?v=o2LEC2NEVuk
 
//TC:o(n) SC: o(n)
var maxDepth = (root) =>{
    if(root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) 
}

//BFS: breath first serach
//TC:o(n) SC: o(n)
var BFSapproach =(root)=>{
        if (root === null) return 0; // Base case: if node is null, return 0
   
           const leftHeight = maxDepth(root.left);   // Get height of left subtree
           const rightHeight = maxDepth(root.right); // Get height of right subtree
   
           return 1 + Math.max(leftHeight, rightHeight); // Height of current node
}