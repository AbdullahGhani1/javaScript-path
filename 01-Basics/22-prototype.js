function multiplyByFive(num) {
  return num * 5;
}

multiplyByFive.power = 2;
console.log(multiplyByFive(2)); // 10
console.log(multiplyByFive.power); // 2
console.log(multiplyByFive.prototype); // {}

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.incrementScore = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};
const chai = new createUser("Chai", 25);
const tea = createUser("Tea", 300);
chai.printMe();

let myHeros = ["Ironman", "Thor", "Dr. Strange"];

let heroPower = {
  Ironman: "Suit",
  Thor: "Hammer",
  "Dr. Strange": "Magic",
  getIronManPower: function () {
    console.log(`Ironman power is   ${this.Ironman}`);
  },
};
Object.prototype.getPower = function () {
  console.log(`Power brings responsibility`);
};

heroPower.getPower();
myHeros.getPower();

// inheritance

const User = {
  username: "Abdullah",
  loginCount: 0,
  login: function () {
    console.log("User logged in", this.username);
    console.log(this);
  },
  signedIn: false,
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: " Ts Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

console.log(Teacher);

Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(Teacher);

const myUsername = "Abdullah";
String.prototype.trueLength = function () {
  console.log(`True lenght is: ${this.trim().length}`);
};

"Fareen".trueLength();
