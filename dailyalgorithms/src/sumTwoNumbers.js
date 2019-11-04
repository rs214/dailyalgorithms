//Write a function that takes a non-empty array of distinct integers and an integer representing a target sum. If any of the two numbers in the input array sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

//Sample input: [3,5,-4,8,11,1,-1,6], 10 //=> [-1,11]

//Naive Solution 2 loops O(n^2) time O(1) space
//Self Explanatory 2 loops to loop over and match each and every possible combination
function sumTwoNumbers(array, target) {
  // Write your code here.
  for (let i = 0; i < array.length - 1; i++) {
    const num1 = array[i];
    for (let x = i + 1; x < array.length; x++) {
      const num2 = array[x];
      if (num1 + num2 === target) {
        return [num1, num2].sort((a, b) => a - b);
      }
    }
  }
  return [];
}

//Hash Table Solution O(n) time O(n) space
//Create hash table to match values to target. You are given target and you have both numbers readily available. Create a hash table and set value of num to true. If we find the corresponding num (potentialMatch), then return values, else return empty array
function twoNumberSum(array, targetSum) {
  // Write your code here.
  let nums = {};
  for (let i = 0; i < array.length; i++) {
    let potentialMatch = targetSum - array[i];
    if (potentialMatch in nums) {
      return [potentialMatch, array[i]].sort((a, b) => a - b);
    } else {
      nums[array[i]] = true;
    }
  }
  return [];
}

//Sorted Array Solution O(nlog(n)) time O(1) space
//Sort through array first in ascending order. If left value and right value added together is bigger than target, we move the left value to the left, else move the right value to the right
function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let current = array[left] + array[right];
    if (current === targetSum) {
      return [array[left], array[right]];
    } else if (current < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
