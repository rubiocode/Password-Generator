// 1st-set my global variables. 
const allOptions =[];

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const numbers= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
const symbols = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

let passUpper;
let passLower;
let passNum;
let passSym;


/*2nd-Homework Readme File states when button clicked then prompts are populated */ 
var $button = document.querySelector("#generate");
// Write password to the #password input


$button.onclick= function genPassword() {
  //prompt for password length 
  const passLength = parseInt(prompt("Choose password length. Password must be between 8-128 characters long"));
 
  // if password within range run below prompts for pass criteria.
  if (passLength < 8 || passLength > 128) {
    alert ("Invalid password length please try again");
    genPassword();
  } else {
    passUpper= confirm ("Do you want your password to include uppercase letters? Click 'OK' for YES or 'Cancel' for NO.");
    passLower= confirm ("Do you want your password to include lowercase letters? Click 'OK' for YES or 'Cancel' for NO.");
    passNum= confirm("Do you want your password to include numerical characters? Click 'OK' for YES or 'Cancel' for NO.");
    passSym= confirm ("Do you want your password to include special characters? Click 'OK' for YES or 'Cancel' for NO.");
  } 
  /* extracting boolean answers from prompts and creating conditional statements.*/ 
  if (passUpper===true){
    allOptions.push (alphabet[Math.floor(Math.random()*26)]);

  }
  if (passLower===true) {
    allOptions.push(alphabet.toLowerCase([Math.floor(Math.random()*26)]));
  }
  if (passNum ===true) {
    allOptions.push(...numbers[Math.floor(Math.random ()*10)]);
  }
  if (passSym===true) {
    allOptions.push(...symbols[Math.floor(Math.floor()*(symbols.length))]);
  }
  let randomizedPass = (Math.random()*allOptions.length)
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("You need to include at least one character type.");
  } else {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}