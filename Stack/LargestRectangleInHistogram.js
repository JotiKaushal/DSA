// Given an array of integers heights representing the histogram's bar height where 
//the width of each bar is 1, return the area of the largest rectangle in the histogram.
// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:
// Input: heights = [2,4]
// Output: 4
 

// Intuition:
// The intuition behind the solution is to use two arrays, nsr (nearest smaller to the right) 
//and nsl (nearest smaller to the left), to determine the boundaries of the rectangle 
//for each bar in the histogram. By calculating the area for each rectangle and keeping 
//track of the maximum area, we can find the largest rectangle in the histogram.

// Approach:
// Initialize an empty stack s to store the indices of the histogram bars.
// Create two arrays, nsr and nsl, each of size n (where n is the number of elements 
//in the heights vector), and initialize all elements to 0.
// Process the histogram bars from right to left:
// While the stack is not empty and the height of the current bar is less than or equal to 
//the height of the bar at the top of the stack, pop the stack.
// If the stack becomes empty, set nsr[i] (the nearest smaller to the right for the current bar) to n.
// Otherwise, set nsr[i] to the index at the top of the stack.
// Push the current index i onto the stack.
// Empty the stack.
// Process the histogram bars from left to right:
// While the stack is not empty and the height of the current bar is less than or equal to the height
// of the bar at the top of the stack, pop the stack.
// If the stack becomes empty, set nsl[i] (the nearest smaller to the left for the current bar) to -1.
// Otherwise, set nsl[i] to the index at the top of the stack.
// Push the current index i onto the stack.
// Initialize a variable ans to 0. This variable will store the maximum rectangle area.
// Iterate over the histogram bars:
// Calculate the area of the rectangle for the current bar using the 
//formula: heights[i] * (nsr[i] - nsl[i] - 1).
// Update ans with the maximum of ans and the calculated area.
// Return ans as the largest rectangle area in the histogram.
// Complexity:
// The time complexity of this solution is O(n), where n is the number of elements in 
//the heights vector. This is because each bar is processed only once.
// The space complexity is O(n) as well because we use two additional arrays of size n,
// nsr and nsl, and a stack to store indices.

var largestRectangleArea = function(heights) {
    const n = heights.length;
    const nextSmall = new Array(n).fill(0);
    const previousSmall = new Array(n).fill(0);

    const stack = [];
        
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
                stack.pop();
        }
        if (stack.length === 0) {
            nextSmall[i] = n;
        } else {
            nextSmall[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    while (stack.length !== 0) {
        stack.pop();
    }

    for (let i = 0; i < n; i++) {
        while (stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length === 0) {
            previousSmall[i] = -1;
        } else {
            previousSmall[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, heights[i] * (nextSmall[i] - previousSmall[i] - 1));
    }
   
    return ans;
};