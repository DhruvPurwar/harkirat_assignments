/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isAlphabet(string) {
  var regex = /^[A-Z0-9]+$/;
  return regex.test(string);
  // if('A'<= string <='Z')return true;
  // return false;
}
function isPalindrome(str) {
  let upperStr= str.toUpperCase();
  if(str.length==1)return true;
  // let i=0,j=str.length-1;
  // while(i<=j){

  // }

  for(let i=0,j=str.length-1;i<=j;i++, j--){
    // let lastIndex=str.length-1-i;
    while(i<=j && !isAlphabet(upperStr[i]) ){i++; }
    while(i<=j && !isAlphabet(upperStr[j])){j--; }
    if(upperStr[i]!== upperStr[j])return false;
    console.log(upperStr[i],upperStr[j])
  }
  return true;
}

module.exports = isPalindrome;
