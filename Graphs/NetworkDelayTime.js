// You are given a network of n nodes, labeled from 1 to n. You are also given times, 
//a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source
// node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the minimum time it takes for all 
//the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal,
// return -1.

 

// Example 1:
// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2

// Example 2:
// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1

// Example 3:
// Input: times = [[1,2,1]], n = 2, k = 2
// Output: -1
 
// reference with dijkstra: https://www.youtube.com/watch?v=Lam9Q7-W8Rc
//tc:o(elogv)
//sc: o(v)
//https://www.youtube.com/watch?v=vbbLxsdfmDg
var networkDelayTime = function(times, n, k) {
    let adjList = new Array(n+1).fill(null);
    for(let time of times){
        let [from, to, t] = time;
        if(!adjList[from]) adjList[from] = [];
        adjList[from].push([to, t]);
    }

    let minHeap = new MinPriorityQueue({priority: item => item[1]});
    const visited = new Set();
let minTime = 0;
minHeap.enqueue([k, 0]);

while(minHeap.front() != null){
    let [node,totalTime] = minHeap.dequeue().element;
    if(visited.has(node))continue;
    visited.add(node);
    minTime = Math.max(minTime, totalTime);
    let connectedNodes = adjList[node];
    if(!connectedNodes)  continue;
    for(let node of connectedNodes){
        const [nodeNum, nodeTime] = node;
        minHeap.enqueue([nodeNum, nodeTime + totalTime]);
    }
}
if(visited.size !== n) return -1;
return minTime;
};

