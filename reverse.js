const readline=require('readline-sync');
let string=readline.question("enter the word: ");
function reversestring(str){
    let arr=str.split('');
     let reversed_arr=arr.reverse();
     let reversed_str=reversed_arr.join('');
     return reversed_str;
    }
console.log(reversestring(string));