// LECTURE 4 - Strings in Javascript

// HTML provides structure to text. Like <p>This is a Para</p>
// CSS helps to style the text.
// JS helps to manipulate / store text.

let message = 'Game starts at 4pm'

// A string is surrounded by quotes. Either single or double

// How to write this ? In the example below we are using a quote within enclosing quotes.

let newMessage = 'Game's happening at 4';

// To write this we need escape characters.

let newMessage = 'Game\'s happening at 4';

// Concatenation

let fullName = firstName + lastName;

// What happens here

let temp = 'My car sold for '+4200;

// 4200 is converted to a string

// if we have a string like

let num = '4200';

// Then we can convert it to a number using

num = Number(num);

// And to convert it back to a string we can use

num = num.toString();
