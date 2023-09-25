//create button
var generateBtn = document.querySelector("#generate");

//function to print password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function to generation password
function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digitChars = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:\'",.<>?';
  
  let password = '';
  
  //prompts length
  const length = parseInt(prompt("Enter the length of password (NOTE: must be between 8 and 128):"));
  
  if (isNaN(length) || length < 8 || length > 128) {
      alert("Try Again! Your password length must be between 8 and 128 characters.");
      return;
  }
  

  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeDigits = confirm("Include numeric characters?");
  const includeSpecialChars = confirm("Include special characters?");
  
  if (!includeLowercase && !includeUppercase && !includeDigits && !includeSpecialChars) {
      alert("You must select at least one character type to include in the password.");
      return;
  }
  
  let availableChars = '';
  
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  
  if (includeUppercase) {
      availableChars += uppercaseChars;
  }
  
  if (includeDigits) {
      availableChars += digitChars;
  }
  
  if (includeSpecialChars) {
      availableChars += specialChars;
  }
  
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      password += availableChars[randomIndex];
  }
  
  return password;
}



generateBtn.addEventListener("click", writePassword);
