// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteriaDiv = document.querySelector("#criteriaDiv");
var passLength = document.getElementsByName("passLength");
var passCriteria = document.getElementsByName("passCriteria");

var pLen;
var pCriteria = [];

// Show the Password Criteria block for user input
function showCriteria() {
  criteriaDiv.style.display = "block";
}

// Get the Length of Password 
function getPasswordLength() { 
  for (i = 0; i < passLength.length; i++) {
    if (passLength[i].checked) {
      pLen = passLength[i].value;
    }      
  }
  return pLen;
}

// Get the Criteria of Password 
function getPasswordCriteria() { 
  for (i = 0; i < passCriteria.length; i++) {
    if (passCriteria[i].checked) {
      pCriteria.push(passCriteria[i].value);
    }      
  }
  return pCriteria;
}

function generatePassword() { 
  pLen = getPasswordLength();
  console.log("Selected Password Length==", pLen);
  pCriteria = getPasswordCriteria();
  console.log("Selected Criteris==", pCriteria);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button


generateBtn.addEventListener("click", showCriteria);
generateBtn.addEventListener("click", generatePassword);
