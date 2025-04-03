let unit = parseFloat(prompt("enter the units"));
if (unit >= 0 && unit <= 100) {
    console.log(`your bill is ${unit * 5}rs`);
}
else if (unit > 100 && unit <=300) {
    let bills=(100*5)+(unit-100)*7;
    console.log(`your bill is ${bills}rs`)
}
else if (unit > 300) {
    let bills=(100*5)+(200*7)+(unit-300)*10;
    console.log(`your bill is ${bills}rs`);
}
else {
    console.log("enter valid number");
}