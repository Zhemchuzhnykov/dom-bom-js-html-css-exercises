// fibonacci numbers list
let fibonacciNumbers = [0, 1];

// function filling the fibonacci numbers list with fibonacci numbers till some certain point in count
const makeFibonacciNumbers = number => {

  if(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2] > number) return;
 
  fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);
  
  return makeFibonacciNumbers(number);
};

// function returning the last fibonacci number from the fibonacci numbers list
const lastFibonacciNumber = () => {
  return fibonacciNumbers[fibonacciNumbers.length - 1];
};

// composition function to connect the functions makeFibonacciNumbers and lastFibonacciNumber in one function
const compose = (func1, func2) => value => {
  if(value <= 0) return;
  func1(value);
  const result = func2();
  fibonacciNumbers = [0, 1];
  return result;
};

// the function returning the biggest Fibonacci number that is smaller than the number passed as an argument
const maxFibonacci = compose(makeFibonacciNumbers, lastFibonacciNumber);