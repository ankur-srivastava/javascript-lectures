// LECTURE 3 - NUMBERS AND OPERATORS

// Usually we deal with three types of numbers -
// 1. Integers like 3, 34
// 2. Floating Point like 3.12, 93.34
// 3. Doubles like 1.3452345

// JS has only one data type for numbers called Number.

// Let's declare two numbers

let num1 = 32;
let num2 = 44;

// Arithmetic Operators

// With JS you have all the mathematical operators available to perform various operations.
// Like add, substract etc.

2+3
4/2
4%2

// We use operator precedence rules when evaluating a complex expression

let x = 3+2*6/2

// It's good to use parenthesis.

(3+2)*(6/2)

// Increment Operators using Postfix operator

let x = 4;
x++
x

// Comparison Operators

// If you want to check that two values are identical you can use === operator
// Similarly to check if they are not equal you can use !==

// === compares the data type also, in addition to it's value. == does not.

// Other frequently used comparison operators include : <, >, <=

// Mostly in conditional statements like if-else
if(x > y)
