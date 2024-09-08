/**
 * Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

It is guaranteed that the answer will in the range of a 32-bit signed integer.
Example 1
Input: root = [1,3,2,5,3,null,9]
Output: 4
Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
Example 2:


Input: root = [1,3,2,5,null,null,9,6,null,7]
Output: 7
Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    const minPos = [0];
      let maxWidth = 0;
      
      callDFS(root, 0, 0);
      return maxWidth;
      
      function callDFS(node, level, pos) {
          if(!node) return;
          if(minPos[level] === undefined) minPos.push(pos);
          
          const diff = pos - minPos[level];
          maxWidth = Math.max(maxWidth, diff+1);
          
          callDFS(node.left, level+1, diff*2+1);
          callDFS(node.right, level+1, diff*2+2);
      }
  };