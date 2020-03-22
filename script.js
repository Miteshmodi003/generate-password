// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseChar = "Do you want at least one lowercase character in your password?";

const upperCaseChar = "Do you want at least one uppercase character in your password?";

const numericChar = "Do you want at least one numeric character in your password?";

const specialChar = "Do you want at least one special character in your password?";

function generatePassword() {
    let lengthOfPassword = '';

    do {
        lengthOfPassword = prompt("What should be the length of password?");

        if (parseInt(lengthOfPassword) < 8 || parseInt(lengthOfPassword) > 128) {
            alert("The password cannot be shorter than 8 characters and cannot be longer than 128 characters.");
        }

        if (isNaN(lengthOfPassword)) {
            alert("Please enter a valid number to determine the length of your password");
        }
    }
    while (parseInt(lengthOfPassword) < 8 || parseInt(lengthOfPassword) > 128)

    isLowerCase = validateUserInput(lowerCaseChar);
    isUpperCase = validateUserInput(upperCaseChar);
    isNumeric = validateUserInput(numericChar);
    isSpecialChar = validateUserInput(specialChar);

    const charTypes = [{ isLowerCase }, { isUpperCase }, { isNumeric }, { isSpecialChar }].filter(character => Object.values(character)[0]);
    const countOfTypes = isLowerCase + isUpperCase + isNumeric + isSpecialChar;
    let passWord = "";

    // According to password length
    for (var i = 0; i < parseInt(lengthOfPassword); i += countOfTypes) {
        charTypes.forEach(type => {
            const charType = Object.keys(type)[0];

            if (charType == "isLowerCase") {
                passWord += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            }
            else if (charType == "isUpperCase") {
                passWord += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            }
            else if (charType == "isNumeric") {
                passWord += +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
            }
            else if (charType == "isSpecialChar") {
                const symbols = '!@#$%^&*(){}[]=<>/,.';
                passWord += symbols[Math.floor(Math.random() * symbols.length)];
            }
        });
    }
    console.log(passWord);
    
    return passWord;
}

// Checks if the given string is null or empty
function isNullOrEmpty(str) {
    return !str;
}

function validateUserInput(question) {
    const validUserInputs = ["y", "yes", "yeah", "ya", "yah", "yay", "n", "no", "nah", "nay"];

    let actualUserInput = '';
    let isNotValidUserInput = false;
    let retVal = false;
    do {
        actualUserInput = prompt(question);
        if (isNullOrEmpty(actualUserInput)) {
            return retVal;
        }

        actualUserInput = actualUserInput.trim().replace(/[\d\W_]+/, '').toLowerCase();
        
        isNotValidUserInput = !validUserInputs.includes(actualUserInput);
        if (isNotValidUserInput) {
            alert("Your response cannot include any number\(s\) or special character\(s\).");
        }
    }
    while (isNotValidUserInput)

   
    if (actualUserInput[0] === 'y') {
        retVal = true;
    }

    return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
