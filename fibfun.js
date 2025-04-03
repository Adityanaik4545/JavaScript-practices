function fibonacce(number){
    let first=0;
    let second=1;
    console.log(first)
    console.log(second)
    for(let i=3;i<=number;i++){
        let nxt=first+second;
        console.log(nxt)
        first=second;
        second=nxt;
    }
}
fibonacce(8)