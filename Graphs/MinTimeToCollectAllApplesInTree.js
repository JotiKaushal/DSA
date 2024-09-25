// Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

// The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.

 

// Example 1:
// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
// Output: 8 
// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows. 
//Example: 2
// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
// Output: 6
// Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  
// Example 3:

// Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]
// Output: 0


// Intuition
// Use DFS to find all the apples and build the path length.

// Approach
// Starting at node 0, visit all children recursively.
// Add the path length of the children by visiting recursively and if any child has positive length or if the current node has an apple add 2 to the path length. Repeat this for all nodes except the root.

// Complexity
// Time complexity:
// O(n) Where n is the number of nodes to visit using DFS

// Space complexity:
// O(n) From building the adjacency list and recursion.

// Code
//reference https://www.youtube.com/watch?v=-b9ks62HwEg
const minTime = (n, edges, hasApple) => {
    const children = new Array(n);
    for(let i =0; i<n; i++){
        children[i] = new Array();
    }
    for(const edge of edges){
        children[edge[0]].push(edge[1]);
        children[edge[1]].push(edge[0]);
    }
    const dfs = (i, p)=>{
        let pathlen = 0;
        for(const j of children[i]){
            if(j == p) continue;
            pathlen += dfs(j, i);
        }
        if(i == 0) return pathlen;
        return pathlen > 0 || hasApple[i]? pathlen+2 : 0;
    }
    return dfs(0,-1);
};

console.log(minTime(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,true,true,false] ));