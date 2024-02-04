var city = prompt("Enter city name: ");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}
var gender = prompt("Enter your gender: ");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Good Morning!");
}
var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres): "));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
} // Output: "given condition for variable a is true"

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
} // No output

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
} // Output: "condition 2 is true"
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
} // Output: "condition 4 is true"

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
} // Output: "The cost equals"

if (true) {
    alert("True");
} // Output: "True"
if (false) {
    alert("False");
} // No output

if ("car" < "cat") {
    alert("car is smaller than cat");
} // Output: "car is smaller than cat"
var secretNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
var guess = parseInt(prompt("Guess the secret number (between 1 and 10): "));

if (guess === secretNumber) {
    alert("Bingo! Correct answer.");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, try again!");
}
var number = parseInt(prompt("Enter a number: "));

if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}
var number = parseInt(prompt("Enter a number: "));

if (number % 2 === 0) {
    alert(number + " is an even number.");
} else {
    alert(number + " is an odd number.");
}
var temperature = parseFloat(prompt("Enter temperature: "));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's freezing outside!");
}
var firstNumber = parseFloat(prompt("Enter first number: "));
var secondNumber = parseFloat(prompt("Enter second number: "));
var operation = prompt("Enter operation (+, -, *, /, %): ");
var result;

if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation";
}

alert("Result: " + result);

