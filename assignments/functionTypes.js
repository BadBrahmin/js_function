// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function (n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function addOne(n) {
  return n + 1;
}

let addOne1 = function addOne(n) {
  return n + 1;
}

let addOne1 = n => addOne(n);

let addOne1 = n => {
  return n + 1;
}

addOne(2);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function minusOne(n) {
  return n - 1;
}

let minusOne1 = function minusOne(n) {
  return n + 1;
}

let minusOne1 = n => minusOne(n);

let minusOne1 = n => {
  return n + 1;
}

minusOne(3);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function addTwo(x, y) {
  return x + y;
}

let addTwo1 = function addTwo(x, y) {
  return x + y;
}

let addTwo1 = (x, y) => addTwo(x + y);

let addTwo1 = (x, y) => {
  return x + y;
}

addTwo(2, 3);


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subTwo(x, y) {
  return y - x;
}

let subTwo1 = function subTwo(x, y) {
  return y - x;
}

let subTwo1 = (y, x) => subTwo(y - x);

let subTwo1 = (y, x) => {
  return y - x;
}

subTwo(2, 3);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(x, y) {
  return Number(x * y);
}

let multiply = function (x, y) {
  return Number(x * y);
}

let multiply = (x, y) => Number(x * y);

let multiply = (x, y) => {
  return Number(x * y);
}
multiply(1, 2);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function division(x, y) {
  return Number(x / y);
}

let division = function (x, y) {
  return Number(x / y);
}

let division = (x, y) => Number(x / y);


let division = (x, y) => {
  return Number(x / y);
}
divide(2, 4);
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x) {
  return Number(x ** 2);
}

let square = function (x) {
  return Number(x ** 2);
}

let square = n => Number(x ** 2);


let square = (x) => {
  return Number(x ** 2);
}
square(3);


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

let operation = (operation, x, y) => {
  switch (operation) {
    case "add":
      console.log(`${x} + ${y} = ${x + y}`);
      break;
    case "subtract":
      console.log(`${x} - ${y} = ${x - y}`);
      break;
    case "multiply":
      console.log(`${x} * ${y} = ${x * y}`);
      break;
    case "divide":
      console.log(`${x} / ${y} = ${x / y}`);
      break;
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isAgreater(a, b) {
  if (Number(a) > Number(b)) {
    return true;
  }
}

let isAgreater = function (a, b) {
  if (Number(a) > Number(b)) {
    return true;
  }
}

let isAgreater = (a, b) => {
  if (Number(a) > Number(b)) {
    return true;
  }
}

isAgreater(1, 2);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isASmaller(a, b) {
  if (Number(a) < Number(b)) {
    return true;
  }
}

let isASmaller = function (a, b) {
  if (Number(a) < Number(b)) {
    return true;
  }
}

let isASmaller = (a, b) => {
  if (Number(a) < Number(b)) {
    return true;
  }
}
isASmaller(1, 2);
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function isEquall(a, b) {
  if (Number(a) == Number(b)) {
    return true;
  }
}

let isEquall = function (a, b) {
  if (Number(a) == Number(b)) {
    return true;
  }
};

let isEquall = (a, b) => {
  if (Number(a) == Number(b)) {
    return true;
  }
}
isEquall(2, 2);
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function smallest(x, y) {
  return Math.min(x, y);
}

let smallest = function (x, y) {
  return Math.min(x, y);
}

let smallest = (x, y) => Math.min(x, y);

let smallest = (x, y) => {
  return Math.min(x, y);
}
smallest(1, 2);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function greater(x, y) {
  return Math.max(x, y);
}

let greater = function (x, y) {
  return Math.min(x, y);
}

let greater = (x, y) => Math.max(x, y);

let greater = (x, y) => {
  return Math.min(x, y);
}
greater(9, 6);
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function even(n) {
  return n % 2 ? false : true;
}

let even = function (n) {
  return n % 2 ? false : true;
}

let even = n => n % 2 ? false : true;

let even = n => {
  return n % 2 ? false : true;
}
even(4);

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function odd(n) {
  return n % 2 ? true : false;
}

let odd = function (n) {
  return n % 2 ? true : false;
}

let odd = n => n % 2 ? true : false;

let odd = n => {
  return n % 2 ? true : false;
}
odd(4);
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */


function grade(score) {
  if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D"
  } else if (score >= 50 && score < 60) {
    return "F"
  }
}

let grade = function (score) {
  if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D"
  } else if (score >= 50 && score < 60) {
    return "F"
  }
}


let grade = (score) => {
  if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D"
  } else if (score >= 50 && score < 60) {
    return "F"
  }
}
grade(83);

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


function addString(word1, word2) {
  return `${word1} ${word2}`;
}

let addString = function (word1, word2) {
  return `${word1} ${word2}`;
}

let addString = (word1, word2) => `${word1} ${word2}`;

let addString = (word1, word2) => {
  return `${word1} ${word2}`;
}
addString("Function ", "Types");