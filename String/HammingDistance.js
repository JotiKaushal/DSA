/*
Question: hamming Distance

given two strigs x and y, return the hamming distance between them

input: x = 'hello', y = 'hwllw'
output: 2

hello
hwllw
 ^  ^
*/

function getHammingDistance(str1, str2) {
  if (str1.length !== str2.length) return 0; // strings should be of same length
  let distance = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      distance++;
    }
  }
  return distance;
}

console.log(getHammingDistance("hello", "hwllw"));

// version 2: given two integers x and y, return hamming distance between their bits (binary conversion)

function binaryHammingDistance(x, y) {
  x = x.toString(2);
  y = y.toString(2);

  if (x.length < y.length) {
    while (x.length !== y.length) x = "0" + x;
  } else {
    while (x.length !== y.length) y = "0" + y;
  }
  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
}


console.log(binaryHammingDistance(1, 9));
