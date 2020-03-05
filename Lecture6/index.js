/ Arrays in Javascript - The Basics

/ What are Arrays ?

/ Arrays can be used to store a list of data items. Like a list of numbers or objects.

let ageList = [15, 17, 25, 16, 14]

// So if we do not use arrays then we need to declare separate variables for all the ages.
// Imagine if we had 100 people. Declaring 100 variables will be very inefficient.

// Each element in an array is stored at an index. Indexes start from 0.

Index :    0  1	 2	3	 4
Value :   15  17 25	16 14


// How to access elements in an array ?

// It is easy to access the elements stored in the array using index.

// Like if we want to get element stored at the 3rd location we can use

ageList[3]

// Similarly we can assign new value to an index

ageList[3] = 32

// How to find number of items in the array ?

// To find the length of array or number of items in the array we can use the length property.

ageList.length
