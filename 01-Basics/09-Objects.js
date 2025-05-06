// How to create Singleton Objects in JavaScript
// const tinderUser = new Object({
//   id: "123abc",
//   name: "Abdullah",
//   isLoggedIn: true,
// });
// console.log(tinderUser);
// Symbols -
const mySym1 = Symbol("key1");

// Object Literals
const JsUsers = {
  age: 30,
  name: "John",
  isActive: true,
  [mySym1]: "myKey1",
  locatuion: "USA",
  "full Name": "John Doe",
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};

// console.log(JsUsers);
// console.log(JsUsers.name);
// console.log(JsUsers["age"]);
// console.log(JsUsers["full Name"]);
// console.log(JsUsers[mySym1], typeof JsUsers[mySym1], typeof mySym1);

JsUsers.greeting = function () {
  console.log("Hello JS Users ");
};

// console.log(JsUsers.greeting());

JsUsers.greetingTwo = function () {
  console.log(`Hello JS Users ${this.name}`);
};

// console.log(JsUsers.greetingTwo());

const tinderUser = {
  id: "123abc",
  name: "Abdullah",
  isLoggedIn: true,
  fullName: {
    userFullName: {
      firstName: "Abdullah",
      lastName: "Ghni",
    },
  },
};

console.log(
  tinderUser.fullName.userFullName.firstName,
  tinderUser.fullName.userFullName.lastName
);

const obj1 = {
  id: 1,
  firstName: "Abdullah",
};
const obj2 = {
  id: 1,
  lastName: "Ghani",
};

const obj3 = Object.assign({}, obj1, obj2); // target, source1, source2
console.log(obj3);

const obj4 = { ...obj1, ...obj2 }; // Spread Operator
console.log(obj4);

// Getting Keys
console.log(Object.keys(obj1)); // [ 'id', 'firstName' ]

console.log(Object.entries(obj1)); // [ 'id', 'firstName' ]
console.log(tinderUser.hasOwnProperty("id")); // true

const course = {
  name: "JavaScript",
  price: 199,
  isPaid: true,
  courseDetails: {
    courseInstructor: {
      name: "Abdullah",
      age: 30,
      isInstructor: true,
    },
    courseContent: {
      topics: ["HTML", "CSS", "JavaScript"],
      isFree: false,
    },
    courseRating: {
      rating: 4.5,
      reviews: 1000,
    },
    courseDuration: {
      duration: 3,
      isFree: false,
    },
    courseLanguage: ["English", "Urdu", "Hindi", "Arabic"],
  },
};

const {
  courseDetails: {
    courseInstructor,
    courseContent,
    courseRating,
    courseDuration,
    courseLanguage,
  },
} = course;

console.table({
  courseInstructor,
  courseContent,
  courseRating,
  courseDuration,
  courseLanguage,
});

{
}
