// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" },
];
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]

describe("nameAndOccupations", () => {
  test("should take in an array of objects and returns an array with a sentence about each person with their names capitalized", () => {
    expect(nameAndOccupations(people)).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is a president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// b) Create the function that makes the test pass.
/*
create function that takes in an array of objects
declare empty array? sentenceArr
loop though array
grap the name key
save the names into a variable
turn the names into an array with split
loop through the name array
grab the 0 index and cap it
use slice to add the rest of letters
i should an array of the capped
then i can join them with .join
then i can push the senteces with my capped names
return sentenceArr
*/

const nameAndOccupations = (arrOfObj) => {
  let sentenceArr = [];
  arrOfObj.forEach((obj) => {
    let newName = obj.name
      .split(" ")
      .map((strName) => {
        return `${strName[0].toUpperCase()}${strName.slice(1)}`;
      })
      .join(" ");
    sentenceArr.push(`${newName} is a ${obj.occupation}.`);
  });
  return sentenceArr;
};
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

describe("remainsBy3", () => {
  test("should take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remainsBy3(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(remainsBy3(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

// b) Create the function that makes the test pass.
/*
create a function that takes in an array of mixed data
loop through the array with map
check the data type currently being looped through
if it is a number
do a % by 3 and only capture the result
then filter out the non-number data types
return filtered array
*/
const remainsBy3 = (arr) => {
  return arr
    .map((elem) => {
      if (typeof elem === "number") {
        return elem % 3;
      }
    })
    .filter((elem) => typeof elem === "number");
};
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4];
// Expected output: 99
var cubeAndSum2 = [0, 5, 10];
// Expected output: 1125

// a) Create a test with an expect statement using the variables provided.
describe("cubedAndSum", () => {
  test("should take in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(cubedAndSum(cubeAndSum1)).toEqual(99);
    expect(cubedAndSum(cubeAndSum2)).toEqual(1125);
  });
});

// b) Create the function that makes the test pass.
/*
create a function that takes in an array of numbers
create a variable that start with 0
map through the array
cube each number by 3
add the result the sum variable
return the sum variable
*/

const cubedAndSum = (arrOfNums) => {
  let sum = 0;
  arrOfNums.map((num) => {
    sum += num ** 3;
  });
  return sum;
};
