function ispalindrome(str){
let arr=str.split('');
let reversed_arr=arr.reverse();
let reversed_string=reversed_arr.join('')
if(str===reversed_string){
    return "its palindrome"
}
    else{
        return "its not palindrome"
    }
}
console.log(ispalindrome("dad"));