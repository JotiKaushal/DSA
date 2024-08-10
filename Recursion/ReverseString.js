function reverseString(str){
if(str === "") return "";
return reverseString(str.substr(1))+ str.charAt(0);
}


//recursive approach
const helper = (left, right, s) => {
    if (left >= right) return
    [s[left], s[right]] = [s[right], s[left]]
    helper( left+1, right-1, s)
}

var reverseArrayString = function(s) { //['H','E','L','L','O']
        helper(0, s.length - 1, s)
    };
console.log(reverseString('hello'));