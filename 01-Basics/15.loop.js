const array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

const rightTriangle = (n) => {
  const lines = [];
  for (let i = 1; i <= n; i++) {
    // Use native repeat() rather than an inner loop
    lines.push("*".repeat(i));
  }
  // Single join+log reduces console I/O
  console.log(lines.join("\n"));
};

rightTriangle(5);

const lines = [];
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    lines.push("*");
  }
  lines.push("\n");
}
console.log(lines.join(""));
