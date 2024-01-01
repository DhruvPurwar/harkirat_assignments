/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // str1= str1.toUppercase();
  // str2= str2.toUppercase();
  let sortedStr1 = str1.toUpperCase().split('').sort().join('');
  let sortedStr2 = str2.toUpperCase().split('').sort().join('');
  // if(sortedStr1 === sortedStr2)return true;
  console.log(sortedStr1, sortedStr2)
  for(let i=0;i<str1.length;i++){
    if(sortedStr1[i]!== sortedStr2[i])return false;
  }
  return true;
}

module.exports = isAnagram;