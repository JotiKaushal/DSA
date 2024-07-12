//Most efficient sortinng algo

/*
Question: Implement Merge sort in javascript

Write a function to sort the given array nums in ascending order

Input [8,3,5,4,7,6,1,2,9] output: [1,2,3,4,5,6,7,8,9]
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));//dividing array in two parts every time o(log n)
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {//comparing each element in array o(n)
    let sortedArr = []; //<==creating new aarray everytime

    while(left.length && right.length){//
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
        }
        else{
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right]
}

console.log(mergeSort([8,3,5,4,7,6,1,2,9]));

//time complexity: O(n log n)
//space compexity: O(n) 