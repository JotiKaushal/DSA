//Question: given a string  s containing just the characters '(',')','{','}','[' and ']'
//determine if input string is valid
// open bracket must be closed by same type of bracket
// and i crrect rder
// every close bracket has corresponding open bracket of same type

// input: '()' output 'true'
//input: '(){}' output 'true'
//input '({]' output 'false'
//input: '((){})' output 'true'

function isValid(s) {
    let stack =[];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        }else{
            if(isEmpty(stack)) return false;
            const firstElement = stack.pop();
            if((char ===')' && firstElement !== '(') ||
            (char ==='}' && firstElement !== '{') ||
            (char ===']' && firstElement !== '[') ){
               return false;
            }
        }
    }
    return isEmpty(stack);
}

function isEmpty(stack){
    return stack.length === 0;
}

console.log(isValid('({()})'));