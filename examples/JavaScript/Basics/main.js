// main.js

// Importing variables and functions from utils.js
import { PI, incrementCounter, square } from './utils.js';

// Variables and Data Types
let name = "JavaScript Basics"; // String
let isComplete = false;         // Boolean
let items = [1, 2, 3, 4];       // Array
let person = {                  // Object
    firstName: "Marcel",
    lastName: "Hribar",
    age: 17,
    isStudent: true
};

// Functions
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to JavaScript basics.`;
}

// Calling functions
console.log(greetUser(name));

// Arrow Functions
const add = (a, b) => a + b;
console.log(`2 + 3 = ${add(2, 3)}`);

// Classes and Objects
class Animal {
    // Constructor function
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Call the parent constructor
        this.breed = breed;
    }

    // Overriding a method
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Create objects
const myDog = new Dog("Buddy", 4, "Golden Retriever");
myDog.speak(); // Output: Buddy barks.

// Objects and Destructuring
const { firstName, age } = person;
console.log(`Name: ${firstName}, Age: ${age}`);

// Template Strings
console.log(`My dog's name is ${myDog.name} and he is a ${myDog.breed}.`);

// Control Structures
for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i + 1}: ${items[i]}`);
}

// Importing and Using Functions from utils.js
console.log(`PI: ${PI}`);
console.log(`Counter after incrementing: ${incrementCounter()}`);
console.log(`Square of 3: ${square(3)}`);

// Promises and Async/Await
const fetchData = () => new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
});

async function getData() {
    const result = await fetchData();
    console.log(result);
}

getData(); // Logs "Data fetched!" after 1 second
