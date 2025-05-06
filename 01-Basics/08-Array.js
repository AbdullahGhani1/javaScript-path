const array = [1, 2, 3, 4, 5];
const shallowCopy = array;
const deepCopy = [...array];
console.log(typeof array);

console.log(array);
console.log(shallowCopy);
console.log(
  `Change the first element of the Shallow Copy: ${(shallowCopy[0] = 100)}`
);

console.log(`original Array: ${array}`);

// Array Methods

const numbers = [1, 2, 3, 4, 5]; // SMI
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
const mixedArray = [1, "apple", true, null, undefined, { name: "John" }];

console.log(numbers.at(0)); // 1
console.log(numbers.at(-1)); // 5
console.log(numbers.at(-2)); // 4
console.log(numbers.at(2)); // 3
console.log(numbers.at(5)); // undefined
console.log(numbers.at(-6)); // undefined

let colors = ["red", "green", "blue"];
console.log(colors.length); // 3
console.log(colors[0]); // red
console.log(colors[1]); // green
console.log(colors[2]); // blue
console.log(colors[3]); // undefined
console.log(colors[-1]); //
// =====
let str = "Hello World";
console.log(str[0]); // H
str[0] = "b"; // strings are immutable this will not change the string
console.log(str[0]); // H

/*
ARRAY METHODS
Push - add to end
Pop - remove from end
Shift - remove from start
Unshift - add to start
concat - merge arrays
includes - look for a value
indexOf - just like str.indexOf
join - creates a string from arr
reverse - reverses an array!
slice - copy portion of an arr
splice - remove/replace elements
sort - sorts an array
*/

//
