//Nth Fibonacci
//Write a function that takes an integer n and returns the nth fib.

function getNthFib(n) {
  // Write your code here.
  if (n === 1) {
    return 0;
  }
  if (n <= 3) {
    return 1;
  }
  return getNthFib(n-1) + getNthFib(n-2);
}