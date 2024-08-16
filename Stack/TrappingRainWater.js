// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9


//https://www.youtube.com/watch?v=UZG3-vZlFM4   <== check this video for explanation
const getTrappedWater = (heights) => {
  if (heights.length === 0 || heights.length === 1) {
    return 0;
  }
  const n = heights.length;
  const leftStack = [n],
    rightStack = [n];
  leftStack[0] = heights[0];
  for (let i = 1; i < n; i++) {
    const max = Math.max(leftStack[i - 1], heights[i]);
    leftStack[i] = max;
  }

  rightStack[n - 1] = heights[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    const max = Math.max(rightStack[i + 1], heights[i]);
    rightStack[i] = max;
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const min = (Math.min(leftStack[i], rightStack[i])) - heights[i];
    result += min;
  }

  return result;
};

console.log(getTrappedWater([0,1,0,2,1,0,1,3,2,1,2,1]));