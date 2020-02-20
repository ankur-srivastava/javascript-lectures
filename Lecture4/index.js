// LECTURE 4 - Javascript Strings
//
// We will learn how to create Strings, escaping quotes and string concatenation.
//
// Creating a String
// Strings are surrounded by quotation marks. It can be single or double quotes.
// Just like we declare and initialize numbers we can work with strings.

let message = 'Hello World';
message

// Here message is a string literal.

// Escaping Characters in a String
// Let's say we need to use the following string - 'I'm at the store right now'. As you can see here we have a single quote in the string itself. This won't work.
// To handle this we can use the \ symbol.

let message = 'I\'m at the store right now'

// Using \' solves the problem.

// Joining two strings
// To join or concatenate two strings we can use + operator.

let str1 = 'Hello';
let str2 = 'Sam';

str1+' '+str2

// To convert a string to a number you can use the Number() function.
// To convert a number to a string you can use toString()

// Example
let numStr = '922';
typeof(numStr)

let num = Number(numStr);
typeof(num)

let tempStr = num.toString();
typeof(tempStr)

// Template Literals or Template Strings
// This is a new addition. Using this it's convenient to concatenate strings or print out a variable value.
// We use backtick instead of quotes.

let fName = 'Raj';
let message = `Check this out. My name is ${fName}`;
message
