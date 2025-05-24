// Define the add function that takes two arguments and returns their sum as integers
function add(a, b) {
  return parseInt(a, 10) + parseInt(b, 10);
}

// Get the two arguments from command line
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Print the result of add
console.log(add(arg1, arg2));
