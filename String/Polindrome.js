/*
Question: Palindrome Number
An integer is a palindrom when it reads the same forward and backward

Input: x = 121 output: true
       x = 10 output: false
*/

function isPalindrome(x) {
    return x < 0 ? false : x === +x.toString().split('').reverse().join('');//+helps in converting string in integer
}

console.log(isPalindrome(121));