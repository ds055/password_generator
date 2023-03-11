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
var potentialCharsArray = [];

// create empty array for strings for final confirmation msg
var finalConfirmArray = [];

// Create objects for each potential character type; bool used in final confirm, query in character selection confirm, and array for password generation
var uppercase = {
  charType: "uppercase",
  bool: false,
  query: "Would you like your password to contain uppercase letters?",
  array: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
}

var lowercase = {
  charType: "lowercase",
  bool: false,
  query: "Would you like your password to contain lowercase letters?",
  array: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
}

var numeric = {
  charType: "numeric",
  bool: false,
  query: "Would you like your password to contain numbers?",
  array:["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
}

var special = {
  charType: "special",
  bool: false,
  query: "Would you like your password to contain special characters?",
  array: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\u{005D}", "^", "_", "`", "\u{007B}", "|", "\u{007D}", "~"],
}

// Get desired length for password from user; repeat function if answer outside of bounds; cancel if "cancel" is clicked
function getPassLength() {
  numOfPassChars = prompt ("Choose a length for your password from 8-128 characters.");

    if (8 <= numOfPassChars && numOfPassChars <= 128) {
      return numOfPassChars;
    }
    else if (numOfPassChars === null) {
      return "Your Secure Password";
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
    finalConfirmArray.push(object.charType);
  }
  object.bool = bool;
}

// Generates random password
function generatePassword() {
  //Create object array used in for-loop to determine what characters will be in password
  objArray = [uppercase, lowercase, numeric, special]

  getPassLength();

  // If user presses cancel on character length entry, ends script.
  if (numOfPassChars === null) return "Your Secure Password";

  // Calls function loop to add user selected char types to Potential Chars Array.
  for (i=0; i < objArray.length; i++) {
    addToArrayConfirm(objArray[i]);
  }

  // If user responds "cancel" to all confirms, then cancels function.
  if (potentialCharsArray.length <= 0) {
    confirm("Sorry. You must select at least one character type. Please try again.")
    return "Your Secure Password"; 
  }
  // Final confirm message before password creation. "Okay" creates password; "Cancel" ends function.
  else {
    var finalOkay = confirm(`You have chosen: \n +${numOfPassChars} characters for length \n \n Character types of: \n+` + (finalConfirmArray.join("\n+")) + 
    "\n\n Is this correct?")
  
    // If user presses "Cancel," reset all bools and arrays.
    if (finalOkay === false) {
      for (i=0; i < objArray.length; i++) {
        objArray[i].bool = false;
      }
      finalConfirmArray = [];
      potentialCharsArray = [];
      alert("Sorry. Please try again.");
      return "Your Secure Password";
    } 
  }

  // Empty string to store random password
  var randomPassword = "";

  // Randomly chooses inner array of potentialCharsArray, then randomly chooses character from inner array. Adds character to randomPassword.
  for (i=0; i < numOfPassChars; i++){
    var innerArrayNum = Math.floor(Math.random()*potentialCharsArray.length);
    var randomChar = potentialCharsArray[innerArrayNum][Math.floor(Math.random()*potentialCharsArray[innerArrayNum].length)];
    randomPassword = randomPassword.concat(randomChar);
  }

  // Reset all bools and arrays, so function can be run again without page reload. 
  for (i=0; i < objArray.length; i++) {
    objArray[i].bool = false;
  }
  finalConfirmArray = []; 
  potentialCharsArray = [];

  return randomPassword;
}
