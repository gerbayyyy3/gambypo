# Gambypo

Gambypo is a simple module for string manipulation and validation in JavaScript. It provides functions for tasks such as palindrome checking and password validation.

## Installation

You can install Gambypo via npm. Run the following command in your terminal:

```bash
npm install gambypo
```

## Usage

Here's how you can use Gambypo in your JavaScript or Node.js application:

```javascript
const gambypo = require('gambypo');

// Check if a string is a palindrome
const isPalindrome = gambypo.isPalindrome('racecar');
console.log('Is palindrome:', isPalindrome);

// Validate a password
const isValidPassword = gambypo.isValidPassword('StrongPassword123');
console.log('Is valid password:', isValidPassword);
```

## Dependencies

Gambypo depends on `haryap` for some of its validation functionalities.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
