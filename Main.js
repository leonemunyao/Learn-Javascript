// In computer science data is anything that the computer understands
// We have to understand what we have differen data types like undefined...null.....boolean...string
// symbol....number..bigit and object
var myName;
var myName = Leon;
var myVar = 10;


// assinging variables
var a;
a = 7;
var b;
b = a;

// Initializing Variables with the Assignment Operator

var myVar = 0;
var a = 9;

// Declare String Variables

var myFirstName = "Leon";
var myLastName = "Munyao";

var a = 5;
var b = 10;
var c = "I am a";


a = a + 1;
b = b + 5;
c = c + " String!";


// Understanding Case Sensitivity in Variables

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


// Explore Differences Between the var and let Keywords

let chickName = "Jack";
let catSound = "ourw!";

// Declare a Read-Only Variable with the const Keyword
//You should always name variables you don't want to reassign using the const keyword.
//It is common for developers to use uppercase variable identifiers for immutable values 
//and lowercase or camelCase for mutable values (objects and arrays). 

const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 


// Increment a Number with JavaScript
let myVar = 87;
myVar++;

// Decrement
let myVar = 11;
myVar--;

// Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\""; 


// Concatenating Strings with Plus Operator
const myStrr = "This is the start." + " This is the end.";

// Concatenating Strings with the Plus Equals Operator
let myStrg = "This is the first sentence. ";
myStrg += "This is the second sentence.";


// Constructing Strings with Variables
// Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

const myName = "Leon";
const myStri = "My name is " + myName + "and I am well!";

// Find the Length of a String
// Note that the space character between is also counted.

// Example Use the .length property to set lastNameLength to the number of characters in lastName.
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;


// Use Bracket Notation to Find the First Character in a String

let firstLetterOfLastName = "";
const lastNamee = "Lovelace";

firstLetterOfLastName = lastNamee[0]; 
 
// Understand String Immutability
// In JavaScript, String values are immutable, which means that they cannot be altered once created.

// For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:

let myName = "Leon";
myName[0] = "Z";

// Note that this does not mean that myStr could not be re-assigned.
//  The only way to change myStr would be to assign it with a new value, like this:

let myName = "Leon";
myName = "Zeon";

// Use Bracket Notation to Find the Nth Character in a String
const lasttName = "Leondev";
const thirdLetterOfLastName = lasttName[2];

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

// Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["Landcruiser V8", 2];

// Nest one Array within Another Array
const myCars = [["LandcruiserV8", 22], ["AudiRSQ8", 20]];

// Access Array Data with Indexes
const myArrayy = [50, 60, 70];
console.log(myArray[0]);
const myData = myArrayy[0];

// Modify Array Data With Indexes
const myAArray = [18, 64, 99];

myAArray[0] = 45;

// Access Multi-Dimensional Arrays With Indexes

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

// Example 2  
// Will print 8 
const myArraay = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myDatta = myArraay[2][1];

// Manipulate Arrays With push Method
// .push() takes one or more parameters and "pushes" them onto the end of the array.

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].

const myArray1 = [["John", 23], ["cat", 2]];
myArray1.push(["dog", 3]);

// Manipulate Arrays With pop Method
// .pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning 
// it to a variable. In other words, .pop() removes the last element from an array and returns that element.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// The first console.log will display the value 6, and the second will display the value [1, 4].

const myArray2 = [["John", 23], ["cat", 2]];
const removedFromMyArray2 = myArray2.pop();

// Removes ["cat", 2] 

// Manipulate Arrays With shift Method
// We use the shift method to change the first element

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

// Removes "Stimpson"

const myArray3 = [["John", 23], ["dog", 3]];
const removedFromMyArray3 = myArray3.shift();








