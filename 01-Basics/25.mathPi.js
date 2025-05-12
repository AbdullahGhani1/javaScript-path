const myNewObj = {
  pi: Math.PI,
};
console.log(myNewObj.pi); // 3.141592653589793

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

// No — it's non-writable and non-configurable, so:

// You can't change its value

// You can't redefine its property descriptor

// You can't delete it

const chai = {
  name: "chai",
  price: 250,
  isAvailable: true,
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
chai.name = "chai1"; // not allowed
console.log(chai.name); // chai
