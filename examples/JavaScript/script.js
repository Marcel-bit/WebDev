// Basic JavaScript Concepts

// 1. Variables
// Using let, const, and var to declare variables
let name = "Marcel"; // A variable that can be changed
const age = 18;     // A constant variable that cannot be changed
var city = "Kranj"; // An older way to declare a variable

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// 2. Data Types
// JavaScript has several data types
let number = 42;              // Number
let isMarried = false;       // Boolean
let hobbies = ["Coding", "Gaming"]; // Array
let person = {                // Object
    firstName: "Marcel",
    lastName: "Hribar"
};

console.log("Number:", number);
console.log("Is Married:", isMarried);
console.log("Hobbies:", hobbies);
console.log("Person:", person);

// 3. Functions
// Function declaration
function greet() {
    console.log("Hello, World!");
}

// Function with parameters
function greetUser(username) {
    console.log("Hello, " + username + "!");
}

greet();
greetUser(person['firstName']);

// 4. Arrow Functions
const add = (a, b) => a + b;
console.log("Sum:", add(5, 10));

// 5. Conditionals
// if-else statement
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

// Switch statement
switch (city) {
    case "Kranj":
        console.log("You live in Kranj.");
        break;
    default:
        console.log("You live somewhere else.");
}

// 6. Loops
// For loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log("Count:", count);
    count++;
}

// 7. Arrays and Array Methods
let numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Adds an element to the end
console.log("Numbers after push:", numbers);
numbers.pop(); // Removes the last element
console.log("Numbers after pop:", numbers);

// 8. Objects and Object Methods
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    displayInfo: function () {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
};

car.displayInfo(); // Call method to display car information

// 9. Promises and Asynchronous Programming
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
};

fetchData().then(response => {
    console.log(response);
});

// 10. Error Handling
try {
    let result = riskyFunction(); // This function is not defined
} catch (error) {
    console.error("An error occurred:", error);
}

// End of Basic JavaScript Concepts
