/**Table of Contents
1. Function declaration
1.1 A regular function
1.2 Difference from function expression
1.3 Function declaration in conditionals
2. Function expression
2.1 Named function expression
2.2 Favor named function expression
3. Shorthand method definition
3.1 Computed property names and methods
4. Arrow function
4.1 Context transparency
4.2 Short callbacks
5. Generator function
6. One more thing: new Function
7. At the end, which way is better? */
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(24)); // => true
console.log(isEven(11)); // => false

/**
 *
 */
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6)); // => 11
console.log([3, 7].reduce(sum)); // => 10
/*recursion*/
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
let fact = factorial(4); // => 24
console.log("factorial is ", fact);

/** */
function isNil(value) {
  return value == null;
}
/*** */
// Function expression: starts with "const"
const isTruthy = function (value) {
  return !!value;
};
console.log(isTruthy(12));

/***** */
// Function expression: an argument for .filter()
const numbers = [1, true, 5].filter(function (item) {
  return typeof item === "number";
});
console.log(numbers);
/********************************** */
// Function expression (IIFE): starts with "("
function messageFunction(message) {
  return message + " World!";
}
("Hello");
/******************************************************** */

(function () {
  "use strict";
  if (true) {
    function ok() {
      return "true ok";
    }
  } else {
    function ok() {
      return "false ok";
    }
  }
  console.log(typeof ok === "undefined"); // => true
  //console.log(ok()); // Throws "ReferenceError: ok is not defined"
})();
/************ */
const absValue = (number) => {
  if (number < 0) {
    return -number;
  }
  return number;
};
console.log(absValue(-10)); // => 10
console.log(absValue(5)); // => 5
