function countvowels(str){
    let vowels="aeiou";
    let count=0;
    let string=str.toLowerCase();
    for(let char of string){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(`there are total ${countvowels("aeiou")} vowels`);