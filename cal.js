let number1=parseFloat(prompt("enter the 1st number"));
let number2=parseFloat(prompt("enter the 2st number"));
let operator=prompt("enter the operator [+ ,-,*,%,/]");
let random=Math.random();
console.log(random)
if(random>0.1){
switch(operator){
    case"+":
    console.log(`addition of ${number1}+${number2} is ${number1+number2}`);
    break;
    case"-":
    console.log(`subtraction of ${number1}-${number2} is ${number1-number2}`);
    break;
    case"*":
    console.log(`multiplication of ${number1}*${number2} is ${number1*number2}`);
    break;
    case"/":
    if(number2!==0)
    {
        console.log(`division of ${number1}/${number2} is ${number1/number2}`);  
    }
    else
    {
        console.log("error! numbers are not divisible by 0");
    }
    break;
    case"%":
    if(number2!==0)
    {
        console.log(`modulo of ${number1}%${number2} is ${number1 % number2}`);  
    }
    else
    {
        console.log("error! cant find modulus with 0 ");
    }
    break;
    default:
        {
            console.log("please enter valid input!!!");
        }
    
}
}
else{
    switch(operator){
        case"+":
        console.log(`addition of ${number1}+${number2} is ${number1-number2}`);
        break;
        case"-":
        console.log(`subtraction of ${number1}-${number2} is ${number1+number2}`);
        break;
        case"*":
        console.log(`multiplication of ${number1}*${number2} is ${number1/number2}`);
        break;
        case"/":
        if(number2!==0)
        {
            console.log(`division of ${number1}/${number2} is ${number1*number2}`);  
        }
        else
        {
            console.log("error! numbers are not divisible by 0");
        }
        break;
        case"%":
        if(number2!==0)
        {
            console.log(`modulo of ${number1}%${number2} is ${number1 % number2}`);  
        }
        else
        {
            console.log("error! cant find modulus with 0 ");
        }
        break;
        default:
            {
                console.log("please enter valid input!!!");
            }
        
    }
}