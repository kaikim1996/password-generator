// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digitChars = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:\'",.<>?';
  
  let password = '';
  
  const length = parseInt(prompt("Enter the desired password length (between 8 and 128):"));
  
  if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid input. Password length must be between 8 and 128 characters.");
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

const generatedPassword = generatePassword();

if (generatedPassword) {
  alert("Your generated password is:\n\n" + generatedPassword);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
