// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
var searchRange = function(nums, target) {
    if(nums.length == 1 && nums[0] == target) return [0,0]
   let i = 0, n = nums.length, k=n-1;
   while(i <= k){
       let mid = Math.floor((i+k)/2);
       if(nums[mid] == target){
          return Search(mid,target)
       }
       else if(nums[mid] < target){
           i=mid+1;
       }else{
           k = mid-1;
       }
   }

   function Search(mid,item){
      let i = 0;
      for(let j = mid;j>=0;j--){
          if(nums[j] == item){
              i = j;
          }else if(nums[j] < item) break;
      };

      let res = [i];
      let cur = null
      for(let k = i;k<nums.length;k++){
          if(nums[k] > item) break;
          else cur = k
      }
      if(cur){
          res.push(cur)
      }
      return res.length == 1 ? [...res,mid] : res;
   }

   return [-1,-1]
};



var searchRange2= function(nums, target){
    if(nums.length === 0) return [];
    if(nums.length === 1) return (nums[0] === target) ? [0, 0] : [];
    let leftBound = -1;
    let rightBound = -1;

    let left = 0;
    let right = nums.length -1;

    while(left<= right){
        let mid = left +Math.floor((right - left)/2);
         if(nums[mid] === target && nums[mid-1] !== target){
                leftBound = mid;
                break;
         }else if(nums[mid]=== target){
            right = mid -1;;
         }
         else if(nums[mid]<target){
            left = mid +1;;
         }
         else{right = mid -1;}
    }
left = 0; right = nums.length -1;
    while(left<= right){
        let mid = left +Math.floor((right - left)/2);
         if(nums[mid] === target && nums[mid+1] !== target){
                rightBound = mid;
                break;
         }else if(nums[mid]=== target){
            left = mid +1;;
         }
         else if(nums[mid]<target){
            left = mid +1;;
         }
         else{right = mid -1;}
    }

    return [leftBound, rightBound];
}
console.log(searchRange2([1, 3, 3, 3], 3));
