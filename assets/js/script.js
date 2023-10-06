// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteriaDiv = document.querySelector("#criteriaDiv");
var passLength = document.getElementsByName("passLength");
var passCriteria = document.getElementsByName("passCriteria");

var pLen;
var pCriteria = [];

// Line 11 to 14 defines the criteria requirements
var lowerCharset = "abcdefghijklmnopqrstuvwxyz";
var upperCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharset = "0123456789";
var splCharset = "@#$&_";
var selectedCharset = "";
var generatedString = "";

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
  pLen = parseInt(getPasswordLength());
  //console.log("Selected Password Length==", pLen);
  pCriteria = getPasswordCriteria();
  //console.log("Selected Criteris==", pCriteria);

  if (pLen === NaN) {
    window.alert("Please choose the password length");
  }
  else if (pCriteria.length === 0) {
    window.alert("Please choose the password criteria");
  }
  else { 
    for (i = 0; i < pCriteria.length; i++) { 
      if (pCriteria[i] === "uppercase") {
        selectedCharset = selectedCharset + upperCharset;
      }
      if (pCriteria[i] === "lowercase") {
        selectedCharset = selectedCharset + lowerCharset;
      }
      if (pCriteria[i] === "numeric") {
        selectedCharset = selectedCharset + numCharset;
      }
      if (pCriteria[i] === "special") { 
        selectedCharset = selectedCharset + splCharset;
      }
    }

    // This function generates the new length for the password, where MIN value is from user input and MAX value is fixed to 128
    var newLen = getRandomArbitrary(parseInt(getPasswordLength()), 128);

  //  console.log("New length=="+newLen);
  //  console.log(selectedCharset);
  for (var i = 0; i < newLen; i++) { 
    generatedString = generatedString + selectedCharset[Math.floor(Math.random() * selectedCharset.length)];
  }
  //console.log("Generated String=="+ generatedString);
  }
  
  return generatedString;
}


//This function is retrieved from MDN site - Refer READ.ME file
function getRandomArbitrary(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", showCriteria);
generateBtn.addEventListener("click", writePassword);
