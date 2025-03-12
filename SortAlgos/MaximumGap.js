// When looking to find the maximum gap between successive elements in an array, the first thought is to sort the array. Once sorted, the maximum gap will be found between two consecutive elements.
// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

 

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.
 
// Approach
// Check for Short Array:
// If the array has fewer than two elements, return 0 since no gap can exist.
// Sort the Array:
// Sort the input array. This will arrange the elements in ascending order.
// Find Maximum Gap:
// Initialize a variable maximumGap to store the maximum gap found.
// Iterate through the sorted array starting from the second element.
// For each element, calculate the gap between it and the previous element.
// Update maximumGap if the current gap is larger than the previous maximum gap.
// Return Result:
// After iterating through the array, return the value of maximumGap.
// This approach ensures that we find the maximum gap efficiently by leveraging the sorted order of the elements.

// Complexity
// Time complexity: O(nlogn)

// Sorting the array takes (O(n \log n)) time, where (n) is the length of the array.
// Iterating through the array to find the maximum gap takes (O(n)) time.
// The overall time complexity is dominated by the sorting step.
// Space complexity: O(1)

// The space complexity is constant because we are not using any extra space that grows with the input size (excluding the space required for sorting, which is typically (O(\log n)) for in-place sorting algorithms).
// Code

var maximumGap = (nums) => {
 // If the array has less than two elements, return 0 as no gap can exist
 if (nums.length < 2) return 0;
    
 // Sort the array
 nums.sort();

 let maximumGap = 0;

 for (let i = 0; i < nums.length; i++) {
    maximumGap = Math.max(maximumGap, i === 0 ? 0 : (nums[i] - nums[i - 1]));
}

// Return the maximum gap found
return maximumGap;
}

console.log(maximumGap([3,6,9,1]));


//https://www.youtube.com/watch?v=SAkRBaJB8TE


function radixSort2(array){

}