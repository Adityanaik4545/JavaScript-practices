const readline=require('readline-sync');
let number=readline.questionInt("enter the number");
function fact(n){
   let factorial=1;
    for(let i=1;i<=n;i++){
        factorial=factorial*i;
    }
    return factorial;
}
console.log(`factorial is ${fact(number)}`);