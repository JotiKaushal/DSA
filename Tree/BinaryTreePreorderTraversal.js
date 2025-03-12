
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,2,3]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [1,2,4,5,6,7,3,8,9]
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//preorder >> root >> left >> right

const preorderTraversal = (root) =>{
 let res = [];
 preorder(root);
 function preorder(root){
 if(!root) return;
 res.push(root.val)
 preorder(root.left);
 preorder(root.right);

 }
 return res;
}

//iterative solution

var preorderTraversal2 = function(root) {
    if(!root) return [];
   const res = [];
   const stack = [root];

   while(stack.length > 0){
       let node = stack.pop();
       res.push(node.val);
       if(node.right){
          stack.push(node.right)
       }
       if(node.left){
           stack.push(node.left)
       }
   }

   return res;
};