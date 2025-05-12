// Javascript and classes
// Classes are a template for creating objects
// Javascrip is a prototype based language
// Classes are a syntactical sugar over the prototype based inheritance
// Classes are not hoisted
// Classes are not callable

// Object Oriented programming

// Object Literal

//  Constructor function
// Prototype based inheritance
// Class
//  inheritance
//  encapsulation
//  polymorphism
//  abstraction

// object literal
// const user = {
//   username: "John",
//   loginCount: 0,
//   login: function () {
//     console.log("User logged in", this.username);
//     console.log(this);
//   },
//   signedIn: false,
// };

// console.log(user.login());

// Constructor function
const date = new Date();
const User = function (username, loginCount, signedIn) {
  this.username = username;
  this.signedIn = signedIn;
  this.loginCount = loginCount;
  return this; // this is optional by default it returns the object
};

const user1 = new User("Abdullah", 10, false);
const user2 = new User("Ghani", 20, true);

console.log(user1);
console.log(user2.constructor);
