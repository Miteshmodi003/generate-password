# generate-password

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password -- prompts not specified till this point

WHEN prompted for the length of the password -- prompt for length of password
THEN I choose a length of at least 8 characters and no more than 128 characters -- password character length range
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters -- there should be four prompts for lowercase (y/n), uppercase (y/n), numeric (y/n), special character (y/n)
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected --
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
