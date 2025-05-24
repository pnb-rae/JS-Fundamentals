const arg = process.argv[2];
const number = parseInt(arg);

if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${number}`);
}
const arg = process.argv[2];                 // get first argument
const num = parseInt(arg, 10);               // convert to integer base 10

if (!isNaN(num)) {
  console.log("My number:", num);
} else {
  console.log("Not a number");
}
