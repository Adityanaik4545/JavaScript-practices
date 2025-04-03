let isprime=true;
let number=888888;
if(number<=1)
{
    console.log(`${number} is not prime, because prime number starts from 2`);
}
else{
    for(let i=2;i<=Math.sqrt(number);i++)
     {
        if(number%i==0)
            {
                isprime=false;
                break;
            }
        }
        if (isprime)
        {
            console.log(`${number} is prime`);
        }
        else{
            console.log(`${number} not prime`);
        }
}