function Factorial(n) {
    if(n ===0)return 1;
    return n* Factorial(n-1);
    
}

function RangeOfNumber(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        let numbers = RangeOfNumber(startNum, endNum-1);
        numbers.push(endNum)
        return numbers;
    }
    
}

console.log(RangeOfNumber(0, 5));