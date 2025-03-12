// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

//reference https://www.youtube.com/watch?v=RnxuoWbs_v8
var findPeakElement = function(nums) {
    let start =0, end = nums.length -1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        console.log(start, end);
        
        console.log(mid);
        
        if(nums[mid]< nums[mid+1]){
            start = mid+1;
        }else{
            end = mid -1;
        }
    }
    return start;
};

console.log(findPeakElement([1,2,1,3,5,6,4]));