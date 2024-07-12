/*
Question: Truncate the text
write a fxn called truncate that checks the length of a given string - str, and if
it surpasses a specific maximum length, maxlength, it replaces the end of the string with
ellipsis characters "..." so that length matches the maximum length
Input: Subscribe to RoadsideCoder, maxLength = 9
Ouyput: Subscribe..
*/

function trunncate(str, maxLength) {
    if(str.length > maxLength){
       return str.slice(0, maxLength)+ '...';
    }
    return str;
}

console.log(trunncate('Subscribe to Roadsidecoder', 9));
