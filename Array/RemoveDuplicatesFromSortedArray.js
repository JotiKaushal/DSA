//[0,0,0,0,1,1,1,2,2,2,2,4,4,4,4]

//brut force solution 
// function RemoveDuplicatesFromSortedArray(arr){
// if(arr.length === 0){
//     return 0;
// }
// let counter = 1;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i] != arr[j]){
//             arr[counter] = arr[j];
//             i = j;
//             counter++;
//             break;
//         }
//     }
// }
// return arr.slice(0,counter)
// }


function RemoveDuplicatesFromSortedArray(array){
    if(array.length === 0){
             return 0;
         }
  let i = 0;
  let counter = 0;
  for (let j = 1; j < array.length; j++) {
    if(array[i] !== array[j]){
        i = j;
        counter++;
        array[counter] = array[j];
    }
  }
  return array.slice(0,counter+1)
}

console.log(RemoveDuplicatesFromSortedArray([1,1,2]));