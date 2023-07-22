// In computer science data is anything that the computer understands
// We have to understand what we have differen data types like undefined...null.....boolean...string
// symbol....number..bigit and object
var myNamee = "Leon";
var myVar3 = 10;


// assinging variables
var a;
a = 7;
var b;
b = a;

// Initializing Variables with the Assignment Operator

var myVar1 = 0;
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
let myVarr = 11;
myVarr--;

// Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\""; 


// Concatenating Strings with Plus Operator
const myStrr = "This is the start." + " This is the end.";

// Concatenating Strings with the Plus Equals Operator
let myStrg = "This is the first sentence. ";
myStrg += "This is the second sentence.";


// Constructing Strings with Variables
// Sometimes you will need to build a string. By using the concatenation operator (+), you can insert one or more variables into a string you're building.

const myName1 = "Leon";
const myStri = "My name is " + myName1 + "and I am well!";

// Find the Length of a String
// Note that the space character between is also counted.

// Example Use the .length property to set lastNameLength to the number of characters in lastName.
let lastNameLength = 0;
const lastName1 = "Lovelace";
lastNameLength = lastName1.length;


// Use Bracket Notation to Find the First Character in a String

let firstLetterOfLastName = "";
const lastNamee = "Lovelace";

firstLetterOfLastName = lastNamee[0]; 
 
// Understand String Immutability
// In JavaScript, String values are immutable, which means that they cannot be altered once created.

// For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:

let myName2 = "Leon";
myName2[0] = "Z";

// Note that this does not mean that myStr could not be re-assigned.
//  The only way to change myStr would be to assign it with a new value, like this:

let myName3 = "Leon";
myName3 = "Zeon";

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
console.log(arr1);

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
console.log(ourArray);

// Removes "Stimpson"

const myArray3 = [["John", 23], ["dog", 3]];
const removedFromMyArray3 = myArray3.shift();


// Using the .unshift() method to add an element in front of the
// array

const ourArray4 = ["Stimpson", "J", "cat"];
ourArray4.shift();
ourArray4.unshift("Happy");

const myArray4 = [["John", 23], ["dog", 3]];
myArray4.shift();
myArray4.unshift(["Paul", 35]);

// Creating a shopping list
const myList = [["Biscuit", 50], ["Soda", 40], ["Calculators", 40],
["Laptops", 500], ["Pens", 33]];

// Javascript can divided into reusable parts called functions
function functionName() {
  console.log("Understanding Javascript is my dream")
}

functionName();

// Passing values to functions. The actual values that are input or passed 
// into a function when it is called are known as arguments.
 
function functionWithhArgs(a, b) {
  console.log( a + b );
}

functionWithhArgs(10, 20);

function functionWithArrgs(a, b) {
  console.log( a + b );
}

functionWithArrgs(1, 2);

function functionWithArgss(a, b) {
  console.log( a + b )
}

functionWithArgss(9, 7);

// Return a value from a function using return

function plusThree(num) {
  return num + 5;
}

const answer = plusThree(5);

function timesFive(numeric) {
  return numeric*5;
}

const value = timesFive(10);

// Global Scope and Functions
// In Javascript, scope refers to the visibility of variables. 
// Variables which are declared without let or const are automatically created in the global scope. This means they can be 
// seen everywhere in your javascript code.

const myGlobal = 10; 

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local scope and functions 
// Variables which are declared within a function as well as the function parameters have a local scope ...That means they are only
// visible within a function.

function myTest() {
  const loc = "Javascript";
  console.log(loc);
}

myTest();

// Global vs. Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
  console.log(outerWear);
}

myOutfit();

// Understanding undefined value returned from a function
let sum = 0;

function addSum(num) {
  sum = sum + num;
  console.log(sum);
}

function addFive(num) {
  sum = sum + num;
  console.log(sum);
}

addSum(3);
addFive(5);

let summ = 5;

function addFivee(num) {
  summ = summ + num;
  console.log(summ);
}

addFivee(5);

// Assigment with return value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
  console.log(processArg)
}

processed = processArg(7);

// Stand in line
// A queue is an abstract is an abstract data structure where all itmes are kepdt in order

//  

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {

   if (wasThatTrue) {
       return "Yes, that was true";
   }
       return "No, that was false";

}

// Comparison with the Equality Operator
function equalityTest(myVal) {
  if (myVal == 10){
    return "Equal";
  }
  return "Not equal";
}

console.log(equalityTest(16));

// Comparison with the Strict Equality Operator. returns false if the values 
// are not of the same type.

// Practicing comparing different values
// The compareEquality function in the editor compares two values using the equality operator.
//  Modify the function so that it returns the string Equal only when the values are strictly equal.


function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

// Comparison with the Inequality Operator

function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));

// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));


function testGreaterThan(val) {
  if (val > 100) { 
    return "Over 100";
  }

  if (val > 10) {  
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));


// Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10 ) {  
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(10));


// Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25 ) {  
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(10));



function testLessOrEqual(val) {
  if (val <= 12 ) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24 ) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(10));

// Comparisons with the Logical And Operator
function Operator(num){
  if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
}

console.log(Operator(8));


function logicalOpertor(nnum){
  if (nnum > 5 && nnum < 10) {
  return "Yes";
}
return "No";
}

console.log(logicalOpertor(15));


function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(10));


// Comparisons with the Logical Or Operator
// The logical operator || returns true if either of the operands is true otherwise false.
function logicalOr(num) {
  if (num > 10 || num < 5) {
    return "No";
  }
  return "Yes";
} 

console.log(logicalOr(6));

function testLogicalOr(val) {

  if (val < 10 || val > 20 ) {
    return "Outside";
  }
  return "Inside";
}

console.log(testLogicalOr(15));

// Introducing Else Statements
function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }

  return result;
}

console.log(testElse(4));

// Introducing Else If Statements
function ifElse(num) {
  if (num > 15) {
    return "Bigger than 15";
  } else if (num < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }
}
console.log(ifElse(80));


function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(7));

// Logical Order in If Else Statements
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

console.log(bar(0));  // returns less than two

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

console.log(foo(0));  // returns less than one

// Chaining If Else Statements

function testSize(num) {
   if (num < 5 ){
     return "Tiny";
   } else if( num < 10 ){
     return "Small";
   }
   else if( num < 15 ){
     return "Medium";
   }
   else if( num < 20 ){
     return "Large";
   }
   else if( num >= 20 ) {
     return "Huge";
   }
   else {
     return "Change Me";
   }
  
}

console.log(testSize(7));


// Golf Code. 
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }
}

console.log(golfScore(5, 4));

















// Asynchronous Jabvascript

function outSide(callback) {
  callback();
}

function n (){
  setTimeout(() => {
    console.log("Hello Leon")
  }, 3000);
}
 outSide(n);

// Promises....represents eventual completion of an asynchronous function
function inSide() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Leon", age: 23 })
    }, 3000);
  });
}

inSide()
     .then((res) => {
      console.log(res);
     })
     .catch(err => {
      console.log(err);
     })



 async function n() {
  try{
    let x = await inSide()
    console.log("Awaiting for something to happen");
  } catch(err) {
    console.log(err);
  }
 }   
 
 n();





