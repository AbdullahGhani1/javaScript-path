console.log("******* for of ********");
const superHero = ["flash", "batman", "superman", "ironman"];
for (let iterator of superHero) {
  console.log(iterator);
}
console.log("***************");
const map = new Map([
  ["name", "batman"],
  ["name", "batman"],
  ["age", 30],
  ["city", "Gotham"],
]);
for (let [key, value] of map) {
  console.log(key, value);
}

const countries = new Map();
countries.set("PAK", "Pakistan");
countries.set("USA", "United States");
countries.set("UAE", "United Arab Emirates");
countries.set("USA", "United States");

for (const [key, value] of countries) {
  console.log(key, ":-  ", value);
}

console.log("******* Object ********");

const myGame = {
  game1: "PUBG",
  game2: "Call of Duty",
  game3: "Fortnite",
  game4: "Valorant",
  game5: "Apex Legends",
  game6: "Overwatch",
};
// for (let [key, value] of myGame) { // myGame is not iterable
//   console.log(key, ":-  ", value);
// }

console.log("******* for in Object ********");
const programmingLanguages = {
  js: "JavaScript",
  ts: "TypeScript",
  py: "Python",
  rb: "Ruby",
  go: "Go",
  c: "C",
  cpp: "C++",
  java: "Java",
  php: "PHP",
  cs: "C#",
  r: "R",
  swift: "Swift",
  kotlin: "Kotlin",
  rust: "Rust",
  dart: "Dart",
};

for (const key in programmingLanguages) {
  console.log(key, ":-  ", programmingLanguages[key]);
}

console.log("******* for in Array ********");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const key in arr) {
  console.log(key, ":-  ", arr[key]);
}

console.log("******* for each Array ********");

const codingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Ruby",
  "PHP",
  "Swift",
  "Go",
  "Rust",
];

codingLanguages.forEach((item, index, arr) =>
  console.log(index, ":: ", item, arr[index])
);

console.log("******* for each Array of Objects ********");

const myCodingLanguages = [
  { name: "JavaScript", year: 1995, fileExtension: ".js" },
  { name: "Python", year: 1991, fileExtension: ".py" },
  { name: "Java", year: 1995, fileExtension: ".java" },
  { name: "C++", year: 1985, fileExtension: ".cpp" },
  { name: "C#", year: 2000, fileExtension: ".cs" },
  { name: "Ruby", year: 1995, fileExtension: ".rb" },
  { name: "PHP", year: 1995, fileExtension: ".php" },
  { name: "Swift", year: 2014, fileExtension: ".swift" },
  { name: "Go", year: 2009, fileExtension: ".go" },
  { name: "Rust", year: 2010, fileExtension: ".rs" },
  { name: "Dart", year: 2011, fileExtension: ".dart" },
  { name: "Kotlin", year: 2011, fileExtension: ".kt" },
  { name: "R", year: 1993, fileExtension: ".r" },
  { name: "TypeScript", year: 2012, fileExtension: ".ts" },
  { name: "Scala", year: 2003, fileExtension: ".scala" },
  { name: "Elixir", year: 2011, fileExtension: ".ex" },
  { name: "Haskell", year: 1990, fileExtension: ".hs" },
];

myCodingLanguages.forEach((items) => {
  console.table(items);
});
