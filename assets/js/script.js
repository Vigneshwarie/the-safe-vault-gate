// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteriaDiv = document.querySelector("#criteriaDiv");
var passLength = document.getElementsByName("passLength");

var pLen;

// Show the Password Criteria block for user input
function showCriteria() {
  criteriaDiv.style.display = "block";
}

function getPasswordLength() { 
  for (i = 0; i < passLength.length; i++) {
    if (passLength[i].checked) {
      pLen = passLength[i].value;
      console.log("Selected Password Length==", pLen);
    }      
  }
  return pLen;
}

function generatePassword() { 
  pLen = getPasswordLength();
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
