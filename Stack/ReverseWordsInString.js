//Given an input string, reverse the order of words
// example: input ==> 'the sky is blue' ==> output ==>'blue is sky the'
//' hello world ' ==> 'world hello'
// 'a good   example' ==> 'example good a'

//'the sky is blue' ==>split ==> ['the', 'sky', 'is', 'blue'] ==> pop==> blue is sky the

const reverseWord =(s)=>{
const splits = s.split(" "); //space complexity o(n)
const stack =[];//space complexity o(n)

for(let str of splits){ // time complexity o(n)
    stack.push(str);
}
let final ='';
while(stack.length > 0){// time complexity o(n)
  const word = stack.pop();
  if(word){
  final = final += ' ' + word;
  }
}
return final;
}

console.log(reverseWord('the sky is blue'));;

// time complexity o(n)+o(n) = o(2n) = o(n)
//space complexity o(n) + o(n) = o(2n) = o(n)