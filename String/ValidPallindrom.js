var isPalindrome = function(s) {
    if(s === " ") return true;
      let newStr = s.replace(/[^a-z0-9]/gi,"").toLowerCase();
     return newStr.split("").reverse().join("") === newStr ? true : false;
 };