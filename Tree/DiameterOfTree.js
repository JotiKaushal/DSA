var maxWidth=(root) =>{
if(!root) return 0;
let maxD = 0;
   function dfs(node){
      let left = dfs(node.left);
      let right = dfs(node.right);
      let curD = left + right;
      let maxD = Math.max(curD, maxD);
     return Math.max(left+1,right+1);
   }
   dfs(root);
   return maxD;
}