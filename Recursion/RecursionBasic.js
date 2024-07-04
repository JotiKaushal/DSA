//loop
function mutiply(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product = product*array[i];
        
    }
    return product;
    
}

function RecursionMultiply(array){
    if(array.length <= 0) return 1;
    return array[array.length - 1]* RecursionMultiply(array.slice(0, array.length-1))
}

console.log(mutiply([4,3,2,1]));
console.log(RecursionMultiply([4,3,2,1]));