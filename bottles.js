function Beers() {
    let numberOfBottles=99;
    while (numberOfBottles>0) {
        let bottle_word="bottles"
        if (numberOfBottles===1) {
            bottle_word="bottle";
        }

        console.log(`${numberOfBottles} ${bottle_word} of beer on the wall,${numberOfBottles} ${bottle_word} of beer.`);
        numberOfBottles--;
        if (numberOfBottles===0) {
                    console.log(`take one down and pass it around,no more bottles of beer on the wall.`);
                    console.log(`no more bottles of beer on the wall,no more bottles of beer.\n Go to the store and buy some more , 99 bottles of beer on the wall.`)
        }
        else{
                    console.log(`take one down and pass it around,${numberOfBottles} ${bottle_word} of beer on the wall.`)

        }
    }
}
Beers();