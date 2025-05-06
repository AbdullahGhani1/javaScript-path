/*

Primitives Types in JS
- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt
*/

console.log("Hello World");

// Work with Prinmitive Types

const name = "Abdullah Ghani"; // String
let age = 30; // Number
const isEmployed = true; // Boolean
let bonus = null; // Null
let salary; // Undefined
let symbol = Symbol("symbol"); // Symbol
let bigInt = BigInt(12345678901234567890); // BigInt
let bigInt2 = 12345678901234567890n; // BigInt

console.table({
  name,
  age,
  isEmployed,
  bonus,
  salary,
  symbol,
  bigInt,
  bigInt2,
});

// Number In JS
/*
- Js has only one number type
- Number type is used to represent all numeric values
- Number type can represent both integers and floating-point numbers
- positive and negative numbers example: 1, -1, 0
- Whole numbers (integers) example 2, -2, 0
- Decimal numbers (floats) example: 2.5, -2.5, 0.0
- Special numbers: Infinity, -Infinity, NaN (Not a Number)
- Infinity: represents a value that is greater than any finite number
- -Infinity: represents a value that is less than any finite number
- NaN: represents a value that is not a number, such as the result of an invalid mathematical operation
- NaN is a special value in JavaScript that represents "Not a Number"

*/

console.log(`Numbers: ${1 / 0}`); // Infinity
console.log(`Numbers: ${-1 / 0}`); // -Infinity

//  Simple Math Operations
let operations;
operations = 50 + 5; // 55 Addition
operations = 50 - 5; // 45 Subtraction
operations = 50 * 5; // 250  Multiplication
operations = 400 / 25; // 16 Division
operations = 500 % 25; // 0 Modulus -> remainder of division
operations = 2 ** 5; // 32 Exponentiation

console.log(0 / 0); // NaN
console.log(1 / "Hello"); // NaN
console.log(1 + NaN); // NaN

// Math Operations
console.log(1.5 + 1.5 * 2); // 4.5
console.log((10 % 6) ** 2); // 16
console.log(200 + 0 / 0); // NaN

/*
CONST 
- Const is a keyword in JavaScript that is used to declare a variable that cannot be reassigned
- Const variables must be initialized at the time of declaration
- Const variables are block-scoped, meaning they are only accessible within the block in which they are defined
- Const variables cannot be redeclared or reassigned
*/

// const hens; //'const' declarations must be initialized.ts(1155)

const hens = 4;
hens = 20; // TypeError: Assignment to constant variable.
