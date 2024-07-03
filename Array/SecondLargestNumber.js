//[10,11,34,23,3,5,6,7]

//brut force solution
let nums = [10, 11, 34, 23, 3, 5, 6, 7];
// function FindKthLargestNumber(nums, k) {
//   if (nums.length < k) {
//     return 0;
//   }

//solution 1
//   nums.sort((a, b) => b - a); //o(n)
//   console.log(nums);
//   return nums[k - 1];

//solution 2
//   for (let i = 0; i < k; i++) {
//     maxIndex = i;
//     temp = nums[i];

//     for(let j = i+1; j < nums.length; j++){
//      if(nums[j] > nums[maxIndex]){
//          maxIndex = j;
//      }
//     }
//     nums[i] = nums[maxIndex];
//     nums[maxIndex] = temp;
//    }
//    return nums[k-1];
//}

//optimized solution
//[10,11,34,23,3,5,6,7]

function FindSecondLargestNumber(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(FindSecondLargestNumber([2,5,3,8,1]));
