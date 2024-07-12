/*
Question: Implement Selection Sort in Javascript
Write a function to sort the given array nums in ascending order
Input nums = [29,10,14,37,14] output=[10,14,14,29,37]
*/

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {// no need to compare last element
    let minValue = i;// assume first element is the minimum
    for (let j = i + 1; j < n; j++) { // compare it with rest of the array
      if (arr[j] < arr[minValue]) { // if any value is less the minVale
        minValue = j; // update minValue
      }
    }
    if(minValue != i){// if initial min value and new value are not equal, swap
    [arr[i], arr[minValue]] = [arr[minValue], arr[i]]
    }
  }
  return arr;
};

console.log(selectionSort([29,10,14,37,14]));


//time complexity in all worst best average case: O(n2)
//space complexity: O(1)