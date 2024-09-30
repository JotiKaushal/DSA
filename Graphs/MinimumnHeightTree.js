// Intuition
// To find the minimum height trees (MHTs) in a given tree, we can exploit the property 
//of trees where the MHTs' roots are located at the center or around the center of the tree.
// By iteratively removing the leaves (nodes with only one neighbor),
// we converge towards the center of the tree until we are left with one or two nodes, 
//which will be the roots of the MHTs.

// Approach
// Construct an adjacency list representing the tree based on the given edges.
// Initialize a set of leaves, which are nodes with only one neighbor.
// Remove the leaves from the tree and update the adjacency list accordingly.
// Repeat steps 2 and 3 until we are left with one or two nodes, which will be the roots of the MHTs.

// Complexity
// Time complexity: O(n), where n is the number of nodes in the tree. Constructing the adjacency 
// list takes O(n), and the iterative removal of leaves also takes O(n).
// Space complexity: O(n), the space used by the adjacency list.

// Code
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; // Special case: tree with only one node
    
    // Construct adjacency list
    const adjList = {};
    for (const [u, v] of edges) {
        if (!adjList[u]) adjList[u] = [];
        if (!adjList[v]) adjList[v] = [];
        adjList[u].push(v);
        adjList[v].push(u);
    }
    // Initialize leaves
    let leaves = [];
    for (const node in adjList) {
        if (adjList[node].length === 1) {
            leaves.push(parseInt(node));
        }
    }

    // Iteratively remove leaves until we are left with one or two nodes
    while (n > 2) {
        n -= leaves.length;
        const newLeaves = [];
        for (const leaf of leaves) {
            console.log(1,adjList, leaf);
            const neighbor = adjList[leaf].pop(); // Remove the leaf from its neighbor's adjacency list
            console.log(2,neighbor);
            console.log(3, adjList);
            adjList[neighbor].splice(adjList[neighbor].indexOf(leaf), 1); // Remove the neighbor from the leaf's adjacency list
            console.log(4, adjList);
            if (adjList[neighbor].length === 1) {
                newLeaves.push(neighbor);
            }
        }
        leaves = newLeaves;
    }

    // The remaining nodes are the roots of the MHTs
    return leaves;
};

console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]]));