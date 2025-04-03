
function final_name() {
    console.log(`${first_name()} ${second_name()} ${third_name()}`)
}
function first_name() {
    let adjective1 = "Crazy";
    let adjective2 = "Amazing";
    let adjective3 = "Fire";
    let random = Math.random();
    if (random <= 0.3) {
        return adjective1;
    }
    else if (random <= 0.6) {
        return adjective2;
    }
    else
    {
        return adjective3;
    }
}
function second_name() {
    let shop1 = "Food";
    let shop2 = "Engine";
    let shop3 = "Garments";
    let random = Math.random();
    if (random <= 0.3) {
        return shop1;
    }
    else if (random <= 0.6) {
        return shop2;
    }
    else
    {
        return shop3;
    }
}
function third_name() {
    let others1 = "Hub";
    let others2 = "Limited";
    let others3 = "bros";
    let random = Math.random();
    if (random <= 0.3) {
        return others1;
    }
    else if (random <= 0.6) {
        return others2;
    }
    else 
    {
        return others3;
    }
}
