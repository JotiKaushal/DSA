function isPalindrome(str) {
    str = str.toString();
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(String(str).substring(1, str.length - 1));
}

console.log(isPalindrome(-121));
