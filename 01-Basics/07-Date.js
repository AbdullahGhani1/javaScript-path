// Dates
const date = new Date(); // Date object
// console.log(date); // 2023-10-05T12:34:56.789Z

// console.log(typeof date); // object
// console.log(date.toString()); // Tue Apr 29 2025 16:19:03 GMT+0500 (Pakistan Standard Time)
// console.log(date.toDateString()); // Tue Apr 29 2025
// console.log(date.toISOString()); // 16:19:03 GMT+0500 (Pakistan Standard Time)
// console.log(date.toLocaleDateString()); // 4/29/2025
// console.log(date.toLocaleTimeString()); // 4/29/2025, 4:19:03 PM
// console.log(date.toUTCString()); // Tue, 29 Apr 2025 11:19:03 GMT
// console.log(date.toLocaleString()); // 4/29/2025, 4:19:03 PM

// console.table({
//   "typeof date": typeof date, // object
//   "date.toString()": date.toString(), // Tue Apr 29 2025 16:19:03 GMT+0500 (Pakistan Standard Time)
//   "date.toDateString()": date.toDateString(), // Tue Apr 29 2025
//   "date.toISOString()": date.toISOString(), // 2025-04-29T11:19:03.789Z
//   "date.toLocaleDateString()": date.toLocaleDateString(), // 4/29/2025
//   "date.toLocaleTimeString()": date.toLocaleTimeString(), // 4/29/2025, 4:19:03 PM
//   "date.toUTCString()": date.toUTCString(), // Tue, 29 Apr 2025 11:19:03 GMT
//   "date.toLocaleString()": date.toLocaleString(), // 4/29/2025, 4:19:03 PM
// });

// Date methods
// let myCreatedDate = new Date(2025, 1, 25); // month starts from 0 -> January
// console.log(myCreatedDate.toDateString()); // Tue Feb 25 2025

// myCreatedDate = new Date(2025, 0, 25, 5, 30);
// console.log(myCreatedDate.toLocaleString()); // 1/25/2025, 5:30:00 AM

// myCreatedDate = new Date("2025-01-15"); // YYYY-MM-DD format
// console.log(myCreatedDate.toLocaleString()); // 1/15/2025, 12:00:00 AM

// myCreatedDate = new Date("01-15-2025"); // MM-DD-YYYY format
// console.log(myCreatedDate.toLocaleString()); // 1/15/2025, 12:00:00 AM

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1737264000000
// console.log(myCreatedDate.getTime()); // 1737264000000
// console.log(Math.floor(Date.now() / 1000)); // 1737264000

let newDate = new Date();
// console.log(newDate.getDate()); // 29
// console.log(newDate.getDay()); // 2 (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// console.log(newDate.getMonth() + 1); // 4 (1 = January, 2 = February, ..., 12 = December)
console.log(
  newDate.toLocaleString("default", {
    month: "long",
    // year: "numeric",
    // day: "2-digit",
    weekday: "long",
    timeZone: "UTC",
  })
); // Tuesday, April 29, 2025
