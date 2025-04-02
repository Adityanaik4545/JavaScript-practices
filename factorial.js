// let number=4;
// let factorial=1;
// for(let i=1;i<=number;i++){
//     factorial=factorial*i;
// }
// console.log(factorial);
let num=10;
function fact(n) {
    let arr=Array.from(Array(n+1).keys())
    let result=arr.slice(1,).reduce((a,b)=>(a*b))
    console.log(arr)
console.log(result)
}
fact(num)