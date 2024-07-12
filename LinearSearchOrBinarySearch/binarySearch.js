/*
Question: Implement Binary Search in Javascript
Given an array of integer nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index.
otherwise return -1. You must wirte an algorithm with O(log n) runtime complexity.

Input nums = [-1,0,3,5,9,12] target = 12 output = 4
      nums = [-1,0,3,5,9,12] target = 11 output = -1

      Note: for binary search array should be srted asc or desc. O(log n) is better than o(n)
      in case of serach

      there is start = 0
               end = array.length -1

               run while loop till start is less than or equal to end

               find middle index

               if(numms[middle] === target
               return middle
               if(numms[middle] < target
               start = middle+1
               if(numms[middle] > target
               end = middle -1;
               )

*/

//time compelxity: O(log n) in each iteration we are doing exponential reducntion. we reducing 
//serach area to half
//space complexity: O(1)
const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else if (nums[middle] > target) {
      end = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch([-1,0,3,5,9,12], 11));
