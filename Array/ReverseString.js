var reverseString = function(s) {
    if(s.length === 0) return s;
    let start = 0;
    let end = s.length - 1;
    while(start < end){
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start ++;
        end--;
    }
    return s;
};

console.log(['H','E','L','L','O']);