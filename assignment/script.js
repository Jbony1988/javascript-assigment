// First Task
let employeeName = "Jerry Bony";
let isLoggedIn = false;

const red = false;
const yellow = false;
const green = false;

let alert =
  isLoggedIn && employeeName
    ? "Employee is logged in"
    : "Employee is not logged in";
console.log(alert, "first message");

// Second Task
isLoggedIn = true;
let message = "Welcome to United Airlines Work Tracking System";
alert = isLoggedIn && employeeName ? `${message}` : "Employee is not logged in";
console.log(alert, "second message");

// Third exercise

let aiportStatus =
  (red && 'This section needs attention "URGENT"') ||
  (yellow && ' "This section needs attention "BUT NOT URGENT"') ||
  (green && "Location is stable") ||
  "Status not available";

console.log(aiportStatus);
