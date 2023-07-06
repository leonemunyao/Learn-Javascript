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

