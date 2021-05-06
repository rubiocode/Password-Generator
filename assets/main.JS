// 1st-set my global variables. 
const allOptions =[];

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const numbers= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
const symbols = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

let passUpper;
let passLower;
let passNum;
let passSym;

let randomizedPass=[];
// Assignment Code
var generateBtn = document.querySelector("#generate");

function myFunction(max){
return Math.floor(Math.random()*max)
}

// Write password to the #password input

function generatePassword() {
  //prompt for password length 
  const passLength = parseInt(prompt("Choose password length. Password must be between 8-128 characters long"));
 
  // if password within range run below prompts for pass criteria.
  if (passLength < 8 || passLength > 128) {
    alert ("Invalid password length please try again");
    generatePassword();

  } else {
      passUpper= confirm ("Do you want your password to include uppercase letters? Click 'OK' for YES or 'Cancel' for NO.");
      passLower= confirm ("Do you want your password to include lowercase letters? Click 'OK' for YES or 'Cancel' for NO.");
      passNum= confirm("Do you want your password to include numerical characters? Click 'OK' for YES or 'Cancel' for NO.");
      passSym= confirm ("Do you want your password to include special characters? Click 'OK' for YES or 'Cancel' for NO.");
    }
    
    /* extracting boolean answers from prompts and creating conditional statements.*/ 
    
    
  if (passUpper===true){
    allOptions.push (alphabet);

  }
  if (passLower===true) {
    allOptions.push(alphabetLower);
  }

  if (passNum ===true) {
    allOptions.push(numbers);
  }

  if (passSym===true) {
    allOptions.push(symbols);
  }
  // If no selection to either characters prompts then run alert and function
  if (!passLower && !passUpper && !passNum && !passSym) {
    alert("Invalid entry your password must include at least one of the followings: uppercase letters, lowercase letters, special characters. Try Again.");
    generatePassword();
  } 
  //creating password
  randomizedPass=[];  
  //creating for loop for how many times the password lenght
  console.log(allOptions);
  for (i=0; i <passLength; i++){ 
      const randomCharacterSet= allOptions[myFunction(allOptions.length)]
      console.log(randomCharacterSet);
      const randomCharacter=randomCharacterSet[myFunction(randomCharacterSet.length)]
    randomizedPass.push(randomCharacter);
  }
console.log(randomizedPass);
  return randomizedPass.join("");

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
