// Get the first argument as a string
const arg = process.argv[2];

// Convert it to integer
const num = parseInt(arg, 10);

// Recursive factorial function
function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Calculate factorial
const result = factorial(num);

// Print the result
console.log(result);
