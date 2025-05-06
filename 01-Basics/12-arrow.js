const user = {
  username: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.username}`);
    console.log(this);
  },
};

// user.greet(); // Hello, my name is John
// user.username = "sam";
// user.greet(); // Hello, my name is sam

// console.log(this); // Window object in browser or global object in Node.js

// function chain() {
//   let username = "Sam";
//   console.log(this.username); // undefined
// }

// chain();

const chai = () => {
  let username = "Sam";
  console.log(this);
};

console.log(this);

const addTwoImplicit = (a, b) => a + b;
console.log(addTwoImplicit(2, 3));

const addTwoExplicit = (a, b) => {
  return a + b;
};

console.log(addTwoExplicit(2, 3));

const addTwoWithDefault = (a, b = 5) => a + b;
console.log(addTwoWithDefault(2)); // 7

// const showObject = () => {
//   username: "Sam";
// };
// console.log(showObject()); // undefined

const showObject = () => ({
  username: "Sam",
});
console.log(showObject());
