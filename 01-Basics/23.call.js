function setUsernmae(username) {
  // comples DB calls
  this.username = username;
  console.log("User named Called");
}

function createuser(username, email, password) {
  //   setUsernmae(username);
  setUsernmae.call(this, username);
  //   this.username = username;
  this.email = email;
  this.password = password;
}

const chai = new createuser("chai", "chai@gmail.com", "123456");

console.log(chai);
