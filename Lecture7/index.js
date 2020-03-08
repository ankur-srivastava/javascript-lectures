// Lecture 7 - Useful methods in Javascript Arrays
//
// Consider this string

let fruits = 'Mango, Peach, Banana';

// What if we want to separate out the fruits from this String i.e. get an array of fruits.
//
// To do this we can use the split() method.

split()
// In order to use split() we need to pass the character which needs to be used to perform the split.

let fruitArray = fruits.split(',');
fruitArray // ['Mango', 'Peach', 'Banana']
fruitArray[0] // Mango

// To combine all the array elements back, so that we can get a String, we can use the join() method.

join()
fruitArray.join('-') // 'Mango-Peach-Banana'

// Alternatively we can use the toString() method.

// How to add and remove elements to or from an Array?
// To add or remove an element at the end of the Array you can use push() and pop()

push()
push() let's us add an element to the end of the Array.

fruitArray.push('Orange')

pop()
pop() let's us remove an element from the end of the Array.

fruitArray.pop()

// Similarly, to add or remove an element at the start of the Array you can use unshift() and shift()
