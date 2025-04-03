
let random=Math.random()
console.log(random);
let num1=parseFloat(prompt("enter the number"));
let operator=prompt("enter the operator");
let num2=parseFloat(prompt("enter the second no"));
let obj={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*"
}
function calculation(num1,operator,num2){
    switch(operator){
        case"+":
        return num1+num2;
        case"-":
        return num1-num2;
        case"*":
        return num1*num2;
        case"/":
        return num2!=0?num1/num2:"cant divide by zero";
        default: return"invalid input";
    }
}
if(random>0.1){
    // print correct calculation
    alert(`result is ${calculation(num1,operator,num2)}`)
}
else{
    operator=obj[operator];
    alert(`result is ${calculation(num1,operator,num2)}`)
}
