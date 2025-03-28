// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined
//  between two nodes p and q as the lowest node in T that has both p and q as descendants 
//  (where we allow a node to be a descendant of itself).”
// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself 
// according to the LCA definition.
// Example 3:
// Input: root = [1,2], p = 1, q = 2
// Output: 1
 //https://www.youtube.com/watch?v=fehixeGZY9k

 //below is for binary tree
 var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root
     const left = lowestCommonAncestor(root.left, p, q)
     const right = lowestCommonAncestor(root.right, p, q)
     if (!left) return right  // p and q are in the right subtree
     if (!right) return left  // p and q are in the left subtree
     return root              // p is in one side and q is in the other, found both
 };


 //For binary search tree where left node is less than root and right node is greater than root

 var lowestCommonAncestor2 = function(root, p, q) {
    if(p.val <root.val && q.val < root.val){//p and q ar on left side of the binary tree
     return lowestCommonAncestor(root.left, p, q)
    }
    else if(p.val > root.val && q.val > root.val){ //p q are on the right side of the tree
     return lowestCommonAncestor(root.right, p, q)
    }
    else{
     return root; // p and q are the decendednt of root
    }
  };