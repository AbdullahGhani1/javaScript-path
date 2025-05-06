// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30
let a = 200; // Global Scope
if (true) {
  let a = 10; // Block Scope
  const b = 20;
  var c = 30;
  console.log("Block Scope", a); // 10
}

console.log("Global Scope", a); // 200
// console.log(b); // 20
console.log(c); // 30

function one() {
  const username = "Abdullah";
  function two() {
    const password = "12345";
    console.log(username);
  }
  //   console.log(password); // ReferenceError: password is not defined
  two();
}

one();

console.log("addOne: ", addOne(5)); // 200
function addOne(num) {
  return num + 1;
}
console.log("addTwo: ", addTwo(5)); // ReferenceError:  Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};

console.log("addTwo: ", addTwo(5));
