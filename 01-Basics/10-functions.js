function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(10)); // 10

console.log(calculateCartPrice(20, 30, 40));

function calculateCartPriced(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPriced(10, 20, 30, 40)); // [30, 40]

const user = {
  username: "Abdullah",
  price: 100,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject(user); // Username is Abdullah and price is 100
