
var processString = function(str){
    let stack = [];
    for(let char of str){
        if(char !== '#'){stack.push(char);}
        else{stack.pop();}
    }
    return stack.length > 0 ? stack.join(''): '';
 }


var backspaceCompare = function(s, t) {
return processString(s) === processString(t);
};

console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));
