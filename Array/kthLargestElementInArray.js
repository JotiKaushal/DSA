
 //solution 1 with time exceeding error
var kthLargestNumber = function(arr, k) {
    if(arr.length === 0) return 0;
    if(arr.length < k) return 0;
    for (var i = 0; i < arr.length; i++) {
    var max_index = i,
      tmp = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (+arr[j] > +arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];

};

var kthLargestNumber2 = function (arr, k) {
    if(arr.length === 0) return 0;
    if(arr.length < k) return 0;
     arr.sort((a,b)=> BigInt(a)<BigInt(b) ? 1 :  BigInt(a)>BigInt(b) ? -1 : 0 );
    return arr[k-1]
}

console.log(kthLargestNumber2(["3","6","7","10"], 4));