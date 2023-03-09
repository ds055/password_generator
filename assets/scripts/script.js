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

// create variable for number of user-desired characters in password
var numOfPassChars;

// create empty array for potential character collection from prompts
potentialCharsArray = [];

// Create objects for each potential character type; bool used in final confirm, query in character selection confirm, and array for password generation
var uppercase = {
  bool: false,
  query: "Would you like your password to contain uppercase letters?",
  array: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
}

var lowercase = {
  bool: false,
  query: "Would you like your password to contain lowercase letters?",
  array: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
}

var numeric = {
  bool: false,
  query: "Would you like your password to contain numbers?",
  array:["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
}

var special = {
  bool: false,
  query: "Would you like your password to contain special characters?",
  array: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\u{005D}", "^", "_", "`", "\u{007B}", "|", "\u{007D}", "~"],
}

//Create object array used in for-loop to determine what characters will be in password
objArray = [uppercase, lowercase, numeric, special]

// Get desired length for password from user; repeat function if answer outside of bounds
function getPassLength() {
  numOfPassChars = prompt ("Choose a length for your password from 8-128 characters.");

    if (8 <= numOfPassChars && numOfPassChars <= 128) {
      return numOfPassChars;
    }
    else {
      alert("Sorry. The length must be from 8-128 characters. Please try again.")
      getPassLength();
    }
}

// Presents users a confirm for character type. If reply "okay," adds character type into Potential Chars Array, and sets bool for type to true (referenced in final Confirm).
function addToArrayConfirm(object) {
  var bool = confirm (object.query);
  if (bool === true) {
    potentialCharsArray.push(object.array);
  }
  object.bool = bool;
}

// Generates random password
function generatePassword() {
  getPassLength();

  for (i=0; i < objArray.length; i++) {
    addToArrayConfirm(objArray[i]);
  }
  console.log(potentialCharsArray);

  // If user responds "cancel" to all confirms, then cancels function.
  if (uppercase.bool === false && lowercase.bool === false && special.bool === false && numeric.bool === false) {
    confirm("Sorry. You must select at least one character type. Please try again.")
  }
}
