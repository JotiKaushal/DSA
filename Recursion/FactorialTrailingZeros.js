// The solution divides n by 5 repeatedly until n becomes 0. Each time n is divided by 5, 
//the quotient is added to the count of trailing zeroes.

// The reason for dividing by 5 in this solution is based on the concept that trailing zeroes 
//in a factorial result from the multiplication of 10, which is formed by multiplying 2 and 5.
// Since there are always more factors of 2 than factors of 5 in any factorial, counting the number 
//of factors of 5 gives us the number of trailing zeroes in the factorial.

// Complexity
// Time complexity:
// O(logn) because in each iteration of the while loop, the value of n is divided by 5. 
//The number of iterations required to reduce n to zero is proportional to the number of times
// n can be divided by 5, which is log base 5 of n.

// Space complexity:
// O(1) because the algorithm uses a constant amount of extra space regardless of the input n.

var TrailingZeroes = (n) => {
if(n === 0) return n;
let count  = 0;
while(n > 0){
     n = Math.floor(n/5);
    count += n;
}
return count;
}

console.log(TrailingZeroes(9));
