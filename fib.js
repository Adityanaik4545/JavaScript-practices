let first=0;
let second=1;
let number=8;
console.log(first)
console.log(second)
for(let i=3;i<=number;i++){
    let nxt=first+second;
    console.log(nxt)
    first=second;
    second=nxt;
}