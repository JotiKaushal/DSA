/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//inorder traverse left >> root >> right
var inorderTraversal = function(root) {
    let res = [];
    inorder(root);
    function inorder(root){
       if(!root)return null;
       inorder(root.left);
       res.push(root.val);
       inorder(root.right);
    }
    return res;

   };

//iterative solution
var inorderTraversal2 = function(root) {
   const res = [];
   const stack = [];

  while(root || stack.length >0){
   while(root){
       stack.push(root);
       root = root.left;
   }
   root = stack.pop();
   res.push(root.val);
   root = root.right;
  }

  return res;
};

//    For Inorder, we do something between left and right.
// For Preorder, we do something before left and right.
// For Postorder, we do something after left and right.