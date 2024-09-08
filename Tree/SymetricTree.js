
// Given the root of a binary tree, check whether it is a mirror of itself
// (i.e., symmetric around its center).


// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

//https://www.youtube.com/watch?v=L8S1Ij93NY4
//TC: o(n)
//SC: o(n)


var isSymetricTree = (root) => {
    function recurive(l, r){
        if(!l && !r) return true;
        if(!l || !r || (l.val !== r.val))return false;
        return recurive(l.left, r.right) && recurive(l.right, r.left);
    }
    return recurive(root.left, root.right);
}