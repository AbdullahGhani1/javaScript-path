// IIFE (Immediately Invoked Function Expression)
// IIFE is a function that runs as soon as it is defined
// GLobal scope is not polluted
/*
Why use IIFE?
1. Avoid polluting the global scope
2. Create a private scope
3. Avoid variable hoisting
4. Avoid name collisions
5. Create a module
6. Create a closure
7. Create a self-contained code
*/

(function chai() {
  // named IIFE

  const name = "IIFE";
  console.log("Hello " + name);
})(); // semicolon is important here to close the previous statement
// IIFE with parameters
(function (name) {
  console.log("Hello " + name);
})("IIFE with parameters");
