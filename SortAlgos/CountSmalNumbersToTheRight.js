
// Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

//reference https://www.youtube.com/watch?v=_sA1xI4XK0c


// Example 1:
// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.

// Example 2:
// Input: nums = [-1]
// Output: [0]
// Example 3:

// Input: nums = [-1,-1]
// Output: [0,0]
// Complexity
// Time complexity:
// O(nlogn)
// due to the merge sort algorithm being used in the helper function.
// Space complexity:
// O(n)
// due to the creation of temporary arrays during the merge sort process.
// Code
// This function takes an array of numbers and returns the count of smaller numbers on the right side of each number
const countSmaller = (nums) => {
  // Initialize an array to store the result
  const result = new Array(nums.length).fill(0);
  // Create a new array of objects with the value and index of each number
  const arr = nums.map((val, index) => ({ val, index }));
  // Call the helper function to perform the count
  countHelper(arr, 0, arr.length - 1, result);
  // Return the result
  return result;
};

// Recursive helper function to perform the counting
function countHelper(arr, start, end, result) {
  // Base case: if start and end are the same, return an array with the element at the start index
  if (start === end) {
    return [arr[start]];
  }
  // Find the middle index
  const mid = Math.floor((start + end) / 2);
  // Recursively call countHelper on the left and right halves of the array
  const left = countHelper(arr, start, mid, result);
  const right = countHelper(arr, mid + 1, end, result);
 
  // Call mergeSortCount to sort and count the smaller numbers
  return mergeSortCount(left, right, result);
}

// Function to merge and count the smaller numbers
function mergeSortCount(left, right, result) {
  // Initialize variables and arrays
  const sorted = [];
  let i = 0,
    j = 0,
    k = 0;
  const n = left.length,
    m = right.length;
  let count = 0;
  // Loop through the left and right arrays to merge and count the smaller numbers
  while (i < n && j < m) {
    // If the left element is less than or equal to the right element
    if (left[i].val <= right[j].val) {
      // Increment the result at the index of the current left element by the count
      result[left[i].index] += count;
      // Add the left element to the sorted array
      sorted[k++] = left[i++];
    } else {
      // Increment the count and add the right element to the sorted array
      count++;
      // Add the right element to the sorted array
      sorted[k++] = right[j++];
    }
  }
  // Add remaining elements from the left array to the sorted array
  while (i < n) {
    // Increment the result at the index of the current left element by the count
    result[left[i].index] += count;
    // Add the left element to the sorted array
    sorted[k++] = left[i++];
  }
  // Add remaining elements from the right array to the sorted array
  while (j < m) {
    // Add the right element to the sorted array
    sorted[k++] = right[j++];
  }
  // Return the sorted array
  console.log('sorted',sorted);
  return sorted;
}

//countSmaller([5,2,6,1,2,0])
console.log(countSmaller([5,2,6,1,2,0]));