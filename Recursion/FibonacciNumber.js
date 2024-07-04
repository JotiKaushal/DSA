//0,1,1,2,3,5......
//f(n)=f(n-1)+f(n-2)

//loop
function fibLoop(n) {
    let arr = [0,1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-2] + arr[i-1])
        
    }
    return arr[n];
    
}

function fib(n) {
    if(n <= 1){
        return n;
    }
    else{
return fib(n-1)+fib(n-2);
    }
    
}
console.log(fibLoop(4));
console.log(fib(4));