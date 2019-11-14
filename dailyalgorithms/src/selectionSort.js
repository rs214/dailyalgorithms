//Implement Selection Sort
// Implementing SWAP first as we will need to swap elements in our implementation of Selection Sort
function swap (array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Find smallest number, swap with first
//Find next smallest numnber, swap with second
//Repeat till sorted

//We are going to implement a funtion called indexOfMinimum to find the index
//of where the minimum value is

function indexOfminimum (array, startIndex) {
  let minValue = array[startIndex];
  let minIndex = startIndex;

  for (let i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      minIndex = i;
    }
  }
  return minIndex;
}

// now that we have our minimumIndex of any part of an array given the startIndex
// we can use that to implement selectionSort

function selectionSort (array) {
  let current;
    for (let i = 0; i < array.length; i++) {
      current = indexOfminimum(array, i);
      swap(array, i, current)
    }
    return array;
}


//Selection Sort is very slow. Runs in O(n^2) time