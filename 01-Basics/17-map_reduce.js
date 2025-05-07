console.log("******* Filter *********");

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumber = digits.filter((num) => num % 2 === 0);

console.log(evenNumber); // [0, 2, 4, 6, 8]

const numbers = [];
digits.forEach((num) => {
  if (num > 4) {
    numbers.push(num);
  }
});
console.log(numbers); // [5, 6, 7, 8, 9]

// array of objects Books on JavaScript fullStack and System Design in last 4 years also Data Science Books

const books = [
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
  },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2011 },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: 2014 },
  { title: "JavaScript Patterns", author: "Stoyan Stefanov", year: 2010 },
  { title: "JavaScript Allongé", author: "Reginald Braithwaite", year: 2011 },
];

const userBooks = books.filter((book) => {
  return book.year > 2010;
});

console.log(userBooks); // [ 'JavaScript: The Good Parts', 'Eloquent JavaScript', 'You Don\'t Know JS', 'JavaScript Patterns', 'JavaScript Allongé' ]
console.log("******* map *********");

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers1.map((number) => number * 10).map((num) => num + 1)); // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

console.log("******* Reduce *********");

const numbers2 = [1, 2, 3, 4, 5];

const sum = numbers2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 15

// reduce.js

const numbers3 = [1, 2, 3, 4, 5];

// Reducer function with logging
function loggingReducer(accumulator, currentValue, currentIndex, array) {
  console.log(
    `Iteration ${currentIndex}: accumulator = ${accumulator}, ` +
      `currentValue = ${currentValue}`
  );
  const newAcc = accumulator + currentValue;
  console.log(` → returns ${newAcc}\n`);
  return newAcc;
}

// Run reduce with initial value 0
const sum1 = numbers3.reduce(loggingReducer, 0);

console.log(`Final sum returned by reduce(): ${sum1}`);

//  Create a book store Cart
const cart = [
  {
    title: "JavaScript: The Good Parts",
    price: 200,
    quantity: 1,
  },
  {
    title: "Eloquent JavaScript",
    price: 300,
    quantity: 3,
  },
  {
    title: "You Don't Know JS",
    price: 400,
    quantity: 1,
  },
  {
    title: "JavaScript Patterns",
    price: 500,
    quantity: 2,
  },
];

const totalPrice = cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
console.log(`Total Price: ${totalPrice}`); // Total Price: 2200
