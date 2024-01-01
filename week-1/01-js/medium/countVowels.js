/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let cnt=0;
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let mySet = new Set(vowels);
    for (let i=0;i<str.length;i++){
      if(mySet.has(str[i]))cnt++;
    }
    return cnt;
}

module.exports = countVowels;