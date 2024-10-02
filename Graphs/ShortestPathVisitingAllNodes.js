// You have an undirected, connected graph of n nodes labeled from 0 to n - 1.
// You are given an array graph where graph[i] is a list of all the nodes connected 
//with node i by an edge.

// Return the length of the shortest path that visits every node. You may start and 
//stop at any node, you may revisit nodes multiple times, and you may reuse edges.

// Example 1:
// Input: graph = [[1,2,3],[0],[0],[0]]
// Output: 4
// Explanation: One possible path is [1,0,2,0,3]

// Example 2:
// Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
// Output: 4
// // Explanation: One possible path is [0,1,4,2,3]
 
// In-Depth Explanation of BFS Algorithm in "Shortest Path Visiting All Nodes"
// What is Breadth-First Search (BFS)?
// Breadth-First Search (BFS) is a graph traversal algorithm that explores nodes level by level, moving through neighbors before going deeper. In this specific problem, we employ BFS not just to explore the graph but also to search through the different "states" that the graph can be in. Each state encapsulates a set of visited nodes, the current node, and the distance covered so far.

// Detailed Breakdown of the Algorithm
// Initialize Variables
// Number of Nodes (n):

// The variable n stores the total number of nodes in the graph. It helps us create initial states and determine when all nodes have been visited.
// Queue (queue):

// We initialize a queue to store the states we need to explore. A deque is used for its efficient O(1) append and pop operations.
// Visited Set (visited):

// A set is used to keep track of states that have already been visited. This avoids redundant work and cycles.
// Initialization Step
// Initial States:
// Each node is used as a starting point, and for each starting node i, an initial state is enqueued. The state is represented as a tuple (mask, node, dist).
// mask = 1 << i: Only the i-th bit is set, indicating that only node i is visited.
// node = i: The current node is i.
// dist = 0: The distance traveled so far is zero.
// Main BFS Loop
// Dequeue State:

// A state is dequeued from the front of the queue. This state contains:
// mask: Bitmask representing the visited nodes.
// node: The current node.
// dist: The distance traveled to reach this state.
// Check for Goal State:

// If the bitmask equals (1 << n) - 1, it means all nodes have been visited. In that case, the algorithm returns the distance for that state, effectively solving the problem.
// Explore Neighbors:

// For the current node, all its neighbors in the graph are explored. For each neighbor, a new state is generated.
// new_mask = mask | (1 << neighbor): The new mask includes the neighbor as visited.
// new_node = neighbor: The new current node is the neighbor.
// new_dist = dist + 1: The distance is incremented by 1.
// Check and Enqueue New States:

// Before enqueuing the new state, we check whether it has already been visited. If not, it's added to the visited set and enqueued for future exploration.
// Termination and Result
// The BFS loop continues until the queue is empty or the goal state is reached. The shortest distance required to visit all nodes is then returned.
// Time and Space Complexity
// Time Complexity: O(2 
// n
//  ×n), where n is the number of nodes. This is because there are 2 
// n
//   possible subsets of nodes and n nodes to consider for each subset.
// Space Complexity: O(2 
// n
//  ×n), needed for the visited set and the queue.
// Code

const shortestPathVisiting = (graph) => {
    const  n = graph.length;
    let queue = [];
    const allVisited = (1 <<n) -1;
    const visited = new Set();

    for(let i = 0; i < n; i++){
        queue.push([1<<i, i, 0]);
        visited.add((1<<i)*16 +i);
    }

    while(queue.length > 0){
        const [mask, node, dist] = queue.shift();
        if(mask === allVisited){
            return dist;
        }
        for(const neighbor of graph[node]){
            const newMask = mask | 1 << neighbor;
            const hashVal = newMask*16 + neighbor;
            if(!visited.has(hashVal)){
                visited.add(hashVal);
                queue.push(newMask, neighbor, dist+1);
            }
        }
    }
    return -1;
}