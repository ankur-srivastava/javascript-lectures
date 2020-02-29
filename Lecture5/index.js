// LECTURE 5 - Do more with Strings in Javascript

// Handling words and sentences is very important in programming.

// Most things in JS are objects. String is one of them. So when we create a new String we get a bunch of properties and methods
// which helps us to perform various operations.

// Length
// To find length of a String we can use length property as follows

let message = 'Hello';
message.length

// Get a Character
// To get a specific character we can give the index in []

message[3]

// This will return 'l', quite like arrays. The first index location is 0.

// 0 1 2 3 4
// H e l l o

// Get index of a Substring
// We can use indexOf() method to get the index of a substring.

let str1 = 'jackma';
str1.indexOf('ma')  // prints 4
str1.indexOf('Jam') // prints -1

// Extract a Substring
// You can use the slice() method to extract a substring. You need to provide start and end indexes. The end index won't be included.

let str1 = 'jackma';
str1.slice(2,3); // prints c
str1.slice(3,5); // prints km

// If you don't give end index then all characters from start index till end are extracted.

str1.slice(2); // prints ckma

// Change the string case
// To convert characters of a string to all lower case use toLowerCase()

str1.toLowerCase() // prints jackma

// To convert characters of a string to all upper case use toUpperCase()

str1.toUpperCase() // prints JACKMA

// Replace part of a String with another string

// Let's say we want to replace 'get' in 'doget' to 'put'.

str2 = 'doget';
str2.replace('get', 'put') // prints doput
