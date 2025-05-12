class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email;
  }
  set email(email) {
    this._email = email;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(password) {
    this._password = password;
  }
}

const tea = new User("h@user.ai", "123456");
console.log(tea.email);
// old

function Teacher(email, password) {
  this._email = email;
  this._password = password;
  Object.defineProperty(this, "password", {
    get: () => this._password.toUpperCase(),
    set: (password) => {
      this._password = password;
    },
  });
}

const chai = new Teacher("drive", "abs123456");
console.log(chai.password);

const driver = {
  _email: "ab@fari.com",
  _password: "abc123abc",
  get email() {
    return this._email.toUpperCase();
  },
  set email(email) {
    this._email = email;
  },
  get password() {
    return this._password.toUpperCase();
  },
  set password(password) {
    this._password = password;
  },
};

console.log(driver.password);
console.log(driver.email);

// factory function
const coffee = Object.create(driver);
console.log("Coffee", coffee.email);
