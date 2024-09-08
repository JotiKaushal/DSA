// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
//postorder traversal = left >> right >> root
//https://www.youtube.com/watch?v=pFsXbTF70Cw

const postOrderTraversal= (root) => {
  let res = [];
  postOrder(root);
  function postOrder(root){
    if(!root) return;
    postOrder(root.left);
    postOrder(root.right);
    res.push(root.val);
  }
  return res;
}

