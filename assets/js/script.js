// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
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

function checkForPassword() { 
  if (criteriaDiv.style.display !=="block" && passwordText.value.length === 0) {
    criteriaDiv.style.display = "block";
  }
  else if (criteriaDiv.style.display ==="block" && passwordText.value.length === 0) {
    writePassword();
  }
  else { 
    console.log(12345);
    clearTextarea();
    writePassword();
  }
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

// Function to generate the password
function generatePassword() { 
  pLen = getPasswordLength();
  console.log("Selected Password Length==", pLen);
  pCriteria = getPasswordCriteria();


  if (pLen == NaN || pLen == undefined) {
    window.alert("Please choose the password length");
  }
  else if (pCriteria.length === 0) {
    window.alert("Please choose the password criteria");
  }
  else { 
    selectedCharset = "";
    generatedString = "";
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

    // This loop generates the string based on selected character string and length
    for (var i = 0; i < newLen; i++) { 
      generatedString = generatedString + selectedCharset[Math.floor(Math.random() * selectedCharset.length)];
    }
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

function clearTextarea() { 
  document.getElementById("password").value = "";
}

// EventListener
generateBtn.addEventListener("click", checkForPassword);
