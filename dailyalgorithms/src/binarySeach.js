// Write a function that takes in a SORTED array of integers as well as a target integer.
// The function should use binary search algorithm to find if the target number is contained
// in the Array and should return its index if it is, otherwise it should return -1.

function binarySearch (array, target) {
  //Set min value to beginning index of 0 and max to end index of array
  let min = 0;
  let max = array.length - 1;
  //while min less than or equal to max let guess be an integer value of the midpoint
  //of the array, if guess is too small, set min to guess + 1. If guess is too big, set
  //max to guess - 1
  while (min <= max) {
    let guess = Math.floor((min + max)/2);
    if (array[guess] === target) {
      return guess;
    } else if (array[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  //if it is not in the array, return -1
  return -1;
}

//Runtime is log base 2 of n

