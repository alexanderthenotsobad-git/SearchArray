"use strict";

const arrNames = [
  "alex",
  "jeff",
  "jeffrey",
  "John",
  "mom",
  "luciana",
  "keryn",
  "Samantha",
  "nico",
  "zoe",
];

// Create an array to store keystrokes
const inputArray = [];

// "Sniff" user input before user enters 3 keystrokes
document.addEventListener("keypress", function (event) {
  if (inputArray.length < 2) {
    let inputStroke = event.key;

    // Push that "inputStroke" or key stroke into inputArray[]
    inputArray.push(inputStroke);
    console.log(inputStroke);
    console.log(inputArray);

    // Once user presses 3 keys return their inputs as a string with no commas
  } else {
    let matchString = inputArray.toString();
    let matchStringFinal = matchString.replaceAll(",", "");
    console.log(matchStringFinal);
    // Create Regular Expression var
    const RegEx = matchStringFinal + "\\" + "w*";
    console.log(RegEx);
    const myRegExp = new RegExp(RegEx, "i");
    console.log(myRegExp);
    // Query arrNames using user input (matchStringFinal)
    queryArr(myRegExp);
  }
});
// This is the function which will actually query the array arrNames[]
function queryArr(myRegExp) {
  for (let i = 0; i < arrNames.length; i++) {
    const name = arrNames[i];

    // create an Array var for matched name
    let matchedName = name.match(myRegExp);
    if (matchedName == name) {
      console.log("We found a match!");
      console.log(
        "Matched Name Check: " + matchedName + " | Array Name: " + name
      );
    } else {
      //console.log("Error");
      //console.log("Arr");
    }
  }
};
