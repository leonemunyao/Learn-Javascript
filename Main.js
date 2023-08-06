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
// Selecting from Many Options with Switch Statements
//Your function will be passed par and strokes arguments. 
// Return the correct string according to this table which lists the strokes 
// in order of priority; top (highest) to bottom (lowest):

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


// Selecting from Many Options with Switch Statements
//Your function will be passed par and strokes arguments. 
// Return the correct string according to this table which lists the strokes 
// in order of priority; top (highest) to bottom (lowest):

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
     answer = "alpha";
     break;
    case 2:
     answer = "beta";
     break;
    case 3:
     answer = "gamma";
     break;
    case 4:
     answer = "delta";
     break; 
  }
  return answer;
}

console.log(caseInSwitch(4));

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
     answer = "apple";
     break;
    case "b":
     answer = "bird";
     break;
    case "c":
     answer = "cat";
     break;
    default:
     answer = "stuff";
  }


  // Only change code above this line
  return answer;
}
console.log(switchOfStuff("z"));

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
     answer = "Low";
     break;
    case 4:
    case 5:
    case 6:
     answer = "Mid";
     break;
    case 7:
    case 8:
    case 9:
     answer = "High"
  }
  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));

// Returning Boolean Values from Functions
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
// This is written as follows to remove the if else statement
function isEqual(a, b) {
  return a === b;
}

function isLess(a, b) {
    return a < b;
}
console.log(isLess(15, 10));

// Return Early Pattern for Functions
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")   // Byebye won't be displayed because the function exits at the return statement.
}
myFun();

// Counting Cards

let count = 0;

function cc(card) {
   switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;

}

console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));

// Build JavaScript Objects . Data in objects in Javascript is accessed through properties
// Objects present data in a structured way 

const cat = {
  "name": "Leon",
  "legs": 4,
  "tails": 0,
  "enemies": ["Memes", "Poverty"]
};


// Accessing Object Properties with Dot Notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;      
const shirtValue = testObj.shirt;  

// Accessing Object Properties with Bracket Notation
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj1["an entree"];   
const drinkValue = testObj1["the drink"];    


// Accessing Object Properties with Variables
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;
const player = testObj2[playerNumber];


// Updating Object Properties
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["name"] = "Happy Coder" // ||  myDog.name = "Happy Camper"

// Add New Properties to a JavaScript Object
// Here's how we would add a bark property to ourDog:

// ourDog.bark = "bow-wow";

// or

// ourDog["bark"] = "bow-wow";


// Add bark property to myDog and set it to a dog sound in the code below
const myDog2 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog2.bark = "woooo!";

// Delete Properties from a JavaScript Object
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.legs;

// Using Objects for Lookups. You can use objects to lookup values rather than a switch statement or a if/else chain
// Exampe
const article = {
  "title": "I am Leon Munyao learning Javascript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Leon Munyao",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "JULY 25, 2023"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value1 = "title";
const valueLookup = article[value];


// Example below is in if/else statement

function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

// The above in using Objects will be 

function phoneticLookup(val) {
  let result = ""

  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  return result = lookup[val];

};


console.log(phoneticLookup("charlie"));


// Testing Objects for Properties
// To check whether a property exist in an object we use  .hasOwnProperty() method......example

function checkForProperty(object, property) {
  return object.hasOwnProperty(property)
}

console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'top')); // true
console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle')); // false

// Example 2

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";

};
};

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"));
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));
console.log(checkObj({city: "Seattle"}, "city"));
console.log(checkObj({city: "Seattle"}, "district")); 
console.log(checkObj({pet: "kitten", bed: "sleigh"}, "gift"));

// Manipulating Complex Objects.  If you want to store data in flexible data structure a javascript object can
// handle that ...Example of complex data structure 

const ourMusic = [
  {
    "artist": "Anne MArie",
    "title": "Homewo",                        // This is an array that contains an object inside it.
    "release_year": 2019,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];


const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Anne Marie",
    "title": "Karate",
    "release_year": 2020,
    "formats": [
      "CD",
      "Video",
      "MP3"
    ],
    "gold": true
  }
];

// Accessing Nested Objects. Sub-properties can be accessed by chaining together the dot or bracket notation
// Example

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);


const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// Example 2

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

console.log(ourPets[0].names[1]);
console.log(ourPets[1].names[0]);

// Example 3
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);

// Record Collection ....lets assume am creating a function that aids in maintenance of of musical albulm collection
// The collection is organized as an object that contains multiple albums which are also objects.   e ach album is represented 
// in the collection with unique ID as property name.   Within each album object there are various properties describing information 
// about the album

// I should first understand about the function parameters ....parameters act as placeholders for values for example

// function updateRecordss(records, id, prop, value)

// the  RECORD PARAMETERS represents an object literal....here is the object literal

// const recordCollections = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// the ID PARAMETER represents object nested inside our recordCollection ..one of the ID's is this one below 

// 2468: {
//   albumTitle: '1999',
//   artist: 'Prince',
//   tracks: ['1999', 'Little Red Corvette']
// },

// the PROP PARAMETER represents the property name or key inside the object...exmple of props are albumTitle, artist and tracks

// the VALUE PARAMETER represents the value in the objects properties like in the albumTitle the value is ABBA Gold
// Records ,Id ,Prop and Value are four parameters we are going to use

// HOW TO TACKLE THE RULES OF THE CHALLENGE

// The instructions are as follows
// a) If value is an empty string, delete the given prop property from the album.
// b) If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// c) If prop is tracks and value isn't an empty string, you need to update the album's tracks array. 
//    First, if the album does not have a tracks property, assign it an empty array. 
//    Then add the value as the last item in the album's tracks array.


// Setup

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } 
  
  else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
    records[id][prop] = [value];
  } 

  else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } 
  
  else if (value === "") {
    delete records[id][prop];
  }

  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// Iterate with JavaScript While Loops....You can use the same code multiple times by using loops
// The firts type of looops is called while loop because it runs while a specified condition is true and stops 
// when that condition is no longer true 

const ourArray6 = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}


let myArray7 = [];

let v = 5;
while(v >= 0) {
  myArray.push(v);
  v--;
}

// The most common type of javasccript loop is for loop because it runs for a specific number of times .......
// let take a look "for(a; b; c;)" where a is the initializing statement, b is the condition statement  and c is the final
// expression
// The initialization statement is executed once before the loop starts. If the conditional statement is false the loop 
// stops executing 

const ourArray8 = [];

for (let i = 0; i < 5; i++) {
  ourArray8.push(i);
}

console.log(ourArray8);

// Iterate Odd numbers with ....by changing the final expression we can count even numbers only
const ourArray9 = [];

for (let i = 0; i < 10; i += 2) {
  ourArray9.push(i);                   // Even Numbers
}

console.log(ourArray9);

const myArray10 = [];

for(let i = 1; i < 10; i += 2 ){    
  myArray10.push(i)
}                                        //Odd Numbers

console.log(myArray10);


// Counting backwards using a loop ......
const myArray11 = [];

for( let i = 9; i > 0; i -= 2){
  myArray11.push(i);
}
 
console.log(myArray11);


// Iterate through an array with a for loop
const arr5 = [10, 9, 8, 7, 6];

for (let i = 0; i < arr5.length; i++) {
   console.log(arr5[i]);
}

// The condition for the above is i < arr5.length which stops when i is equal to length ....which in this case is 
// i = 4 ......when the loops goes to 5 it terminates because i < arr5.length is false


// Declare and initialize a variable total to 0 .Use for loop to add the value of the myArr array to total

const  myArr8 =[2, 3, 4, 5, 6];
let mySum = 0;

for (let i = 0; i < myArr8.length; i++){
  mySum += myArr8[i];
}

console.log(mySum);

// Nesting for loops
const arr10 = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr10.length; i++) {
  for (let j = 0; j < arr10[i].length; j++) {
    console.log(arr10[i][j]);
  }
}

//Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
  let product = 1;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

// do...while loop 
// Its called a do while because it will first do one pass of the code inside the loop no matter what ..
// Example 

const ourArray11 = [];
let m = 0;

do {
  ourArray11.push(m);
  m++;
} while (m < 5);

console.log(ourArray11);

// Example 2

const myArray12 = [];
let n = 10;

do{
  myArray12.push(n);
  n++;
}

while (n < 5) 

console.log(myArray12);


 function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }