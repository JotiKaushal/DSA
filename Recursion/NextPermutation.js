const nextPermutation = (arr) =>{
    //[1,2,3] => 123 => 132 (next biggest number)
    //[4,1,5,3,2] => 41532 => 42135  (next biggest number)

    if(arr.length === 0) return 0;
    if(arr.length === 1) return arr;
    //step 1 find the smaller number, traversing from right to left example 2: find 1

    let idx1 = -1;
    //compare i with i+1 from right t left
    for (let i = arr.length - 2; i >= 0; i--) {
        if(arr[i] < arr[i+1]){
            idx1 = i;
            break;
        }
    }

    if(idx1 < 0){
        return reverse(arr, 0);
    }


    //find idx2, index which is just greater than idx1
    for (let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] > arr[idx1]){
            idx2 = i;
            break;
        }
    }

    //swap idx1 with idx2 from ex 2: swap 1 with 2
    swap(arr, idx1, idx2);

    //sort 531
      reverse(arr, idx1+1);
      return arr;
}

function reverse(nums, start) {
    let end = nums.length-1
    while (start < end) 
        swap(nums, start++, end--);
}

function swap(arr,start, end){
    [arr[start], arr[end]] = [arr[end], arr[start]];
}

console.log(nextPermutation([4,1,5,3,2]));