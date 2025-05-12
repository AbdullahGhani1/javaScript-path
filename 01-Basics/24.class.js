class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
}

const chai = new User("chai", "chai@fareen.com", "123456");
console.log(chai);
console.log(chai.encryptPassword());

// Behind the Scene
// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };
// User.prototype.changePassword = function () {
//   return `${this.username.uppercase()}`;
// };

// const chai = new User("chai", "123", "123456");
// console.log(chai);
// console.log(chai.encryptPassword());

//Inheritance
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new Course added by ${this.username}`);
  }
}

const tea = new Teacher("tea", "tea@gmail.com", "123456");
console.log(tea);
tea.addCourse();
