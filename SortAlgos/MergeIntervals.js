/*
Question: Given an array of intervals where interval[i] = [start, end], merge all overlapping intervals,
and return an array of the non overlapping that cover all the intervals in input.

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: SInce intervals [1,3] and [2,6] overlaps merge them into [1,6]
*/

//using in build sort method
function merge(intervals) {
  let startIndex = 0;
  let endIdex = 1;

//sort intervals first if subintervals are not in order example [[1,3],[8,10],[2,6],[15,18]]

//using in build sort method 
  //intervals.sort((a, b) => a[startIndex] - b[startIndex]); 

//using in merge sort algo
  intervals = mergeSort(intervals);


  let mergeIntervals = [];
  let mergeStart = intervals[0][startIndex];
  let mergeEnd = intervals[0][endIdex];

  for (let i = 1; i < intervals.length; i++) {
    let subsequentInterval = intervals[i];
    if (subsequentInterval[startIndex] < mergeEnd) {
      mergeEnd = Math.max(mergeEnd, subsequentInterval[endIdex]);
    } else {
      mergeIntervals.push([mergeStart, mergeEnd]);
      mergeStart = subsequentInterval[startIndex];
      mergeEnd = subsequentInterval[endIdex];
    }
  }

  mergeIntervals.push([mergeStart, mergeEnd]);
  return mergeIntervals;
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));//dividing array in two parts every time o(log n)
    let right = mergeSort(arr.slice(mid));
  
    return mergeArray(left, right);
  }
  
  function mergeArray(left, right) {//comparing each element in array o(n)
      let sortedArr = []; //<==creating new aarray everytime
  
      while(left.length && right.length){//
          if(left[0][0] < right[0][0]){
              sortedArr.push(left.shift());
          }
          else{
              sortedArr.push(right.shift());
          }
      }
      return [...sortedArr, ...left, ...right]
  }

console.log(merge([[1,3],[8,10],[2,6],[15,18]]));