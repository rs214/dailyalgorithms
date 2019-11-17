// Write a function that takes a non-empty string and returns a boolean representing whether or not
// the string is a palindrome. A palindrome is defined as a string that is spelled the same
// forwards as backwards

// eg. abcdcba => true

function isPalindrome(string) {
  // Write your code here.
  return string.split("").reverse().join("") === string ? true : false;
}


function firstLetter (str) {
  return str.slice(0,1);
}

function lastLetter (str) {
  return str.slice(-1);
}

function middleLetters (str) {
  return str.slice(1, -1);
}

function isPalindrome (string) {
  if (string.length <= 1) {
    return true;
  }
  if (lastLetter(string) !== firstLetter(string)) {
    return false;
  }

  return isPalindrome(middleLetters(string))
}


//Implement second recursive palidrome code
//if string is a single letter or empty, it is a palidrome
//if lastletter of the word is equal to first letter, it is true and need to check each one
//call isPalidrome recursively onto the middle letters of the string