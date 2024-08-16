// A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
// Example 1:

// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]
// Example 2:

// Input: s = "0000"
// Output: ["0.0.0.0"]
// Example 3:

// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 
//for reference https://www.youtube.com/watch?v=ORLBbFd5U_A

const restoreIP = (s) => {
const n = s.length;
if(n < 4 || n > 12) return [];

const result = [];

function walk(temp, countOfSegment, start){
      if(start === s.length && countOfSegment === 4) result.push(temp);
      if(countOfSegment < 4){
        for (let i = start; i < start+3; i++) {
           let num = s.slice(start,i+1);  
           if(parseInt(num)<= 255){
            if(num.length > 1 && num[0] === '0'){break;}
            walk(temp+(temp ==''?'':'.')+num, countOfSegment+1, i+1);
           }else{
            break;
           }        
        }
      }
}
walk('', 0 , 0);

return result;

}

console.log(restoreIP('25525511135'));