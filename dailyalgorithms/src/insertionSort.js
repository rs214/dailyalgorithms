//Insertion Sort

//Imagine having a dealer deal you a hand in big 2 and you sort from
//smallest to largest as he/she gives you each card.
//Insert the newly dealt card into the already sorted hand.

//first we need to implement Insert function. Given an existing sorted array, we need
//to insert a number into our array going from the end to the beginning and comparing if
// the new number greater than the current number we are on.

function insert(array, rightIndex, value) {
  //for each value starting at the right of the sorted array, if the value we are trying
  //insert is smaller than the current value, move the current value to the next index
  for (var i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i+1] = array[i];
  }
  array[i+1] = value;
}

// Call insert to insert the element that starts at index 1 into the sorted subarray in index 0.
// Call insert to insert the element that starts at index 2 into the sorted subarray in indices 0 through 1.
// Call insert to insert the element that starts at index 3 into the sorted subarray in indices 0 through 2.
// …
// Finally, call insert to insert the element that starts at index n-1, into the sorted subarray in indices 0 through n-2.

var insertionSort = function(array) {
    for(let i = 1; i < array.length; i++) {
        insert(array, i-1, array[i]);
    }
};