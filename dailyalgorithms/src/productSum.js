// Write a function that takes a "special" array and returns its product sum. A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array is the sum of its elements, where "special" arrays inside it should be summed themselves and then multiplied by their level of depth. For example, the product sum of [x,y] is x+y; the product sum of [x, [y,z]] is x + 2y + 2z.

// Sample Input: [5,2,[7,-1], 3, [6,[-13,8], 4]]
// Sample Output: 12(5+2+2*(7-1)+3+2*(6+3*(-13+8)+4))

function productSum(array, multiplier = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], multiplier + 1);
    } else {
      sum += array[i];
    }
  }
  return sum * multiplier;
}

//this is a classic recursion problem. Search through the array, if it is a number, we add that to our total
//if it is anohter array, we call productSum on the array and increase the multiplier by 1.