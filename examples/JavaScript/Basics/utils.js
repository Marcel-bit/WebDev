// utils.js

// Variables (let, const, var)
const PI = 3.14159; // const for values that don’t change
let counter = 0;    // let for values that might change

// Functions
function incrementCounter() {
    counter += 1;
    return counter;
}

// Arrow Functions (alternative to function keyword)
const square = (num) => num * num;

// Export functions so they can be imported in another file
export { PI, incrementCounter, square };
