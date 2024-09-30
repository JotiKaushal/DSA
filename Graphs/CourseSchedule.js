// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must 
//take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.

// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also 
//have finished course 1. So it is impossible.

//reference https://www.youtube.com/watch?v=FN9Q9DmVH_Y

var canFinish = function(numCourses, prerequisites) {
    let adjList ={};
    let visited = new Set();
    for(let [a,b] of prerequisites){
        if(!adjList[a]){
            adjList[a] = [b]
        }
        else{
            adjList[a].push(b);
        }
    }

 function dfs(curr){
    if(visited.has(curr)) return false;
    if(adjList[curr] == []) return true;
    visited.add(curr);
    if(adjList[curr]){
        for(let neigh of adjList[curr]){
            if(!dfs(neigh)){return false}
        }
    }
    visited.delete(curr);
    adjList[curr] = [];
    return true;
 }

 for(let key in adjList){
    if(!dfs(key)){ return false}
 }

 return true;

};