// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var passArray = [];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\u{005C}", "\u{005D}", "^", "_", "`", "\u{007B}", "|", "\u{007D}", "~"];

var upperBool;
var lowerBool;
var numBool;
var specialBool;

function generatePassword() {
  getPassLength();
  getUpperCase();
  getLowerCase();
  getNumeric();
  getSpecialChars();
}

function getPassLength() {
  var numsQuery = prompt ("Choose a length for your password from 8-128 characters.");

    if (8 <= numsQuery && numsQuery <= 128) {
      return numsQuery;
    }
    else {
      alert("Sorry. The length must be from 8-128 characters. Please try again.")
      getPassLength();
    }
}

// TODO Use Confrim instead of prompt
function getUpperCase() {
  var uppsQuery = prompt ("Would you like your password to have uppercase letters? Type 'y' for yes or 'n' for no.");
  uppsQuery = uppsQuery.toUpperCase();
  if (uppsQuery === "Y") {
    passArray.push(uppercase);
    console.log(passArray);
  } else if (uppsQuery === "N") {
  } else {
    alert("Sorry. That's an invalid answer. Please type 'y' for yes or 'n' for no.")
    getUpperCase();
  }
}

// TODO Use Confrim instead of prompt
function getLowerCase() {
  var lowerQuery = prompt ("Would you like your password to have lowercase letters? Type 'y' for yes or 'n' for no.");
  lowerQuery = lowerQuery.toUpperCase();
  if (lowerQuery === "Y") {
    passArray.push(lowercase);
    console.log(passArray);
  } else if (lowerQuery === "N") {
  } else {
    alert("Sorry. That's an invalid answer. Please type 'y' for yes or 'n' for no.")
    getLowerCase();
  }
}

// TODO Use Confrim instead of prompt
function getNumeric() {
  var numQuery = prompt ("Would you like your password to have numbers? Type 'y' for yes or 'n' for no.");
  numQuery = numQuery.toUpperCase();
  if (numQuery === "Y") {
    passArray.push(numeric);
    console.log(passArray);
  } else if (numQuery === "N") {
  } else {
    alert("Sorry. That's an invalid answer. Please type 'y' for yes or 'n' for no.")
    getNumeric();
  }
}

// TODO Use Confrim instead of prompt
function getSpecialChars() {
  var specialQuery = prompt ("Would you like your password to have special characters? Type 'y' for yes or 'n' for no.");
  specialQuery = specialQuery.toUpperCase();
  if (specialQuery === "Y") {
    passArray.push(specialChars);
    console.log(passArray);
  } else if (specialQuery === "N") {
  } else {
    alert("Sorry. That's an invalid answer. Please type 'y' for yes or 'n' for no.")
    getSpecialChars();
  }
}