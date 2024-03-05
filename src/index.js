// gambypo.js

const haryAp = require('haryap');

const gambypo = {
  // Validate if a string is a palindrome
  isPalindrome: (input) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned string and compare with original
    const reversedInput = cleanedInput.split('').reverse().join('');
    return cleanedInput === reversedInput;
  },

  // Validate if a string is a valid password
  isValidPassword: (password) => {
    // Password should be at least 8 characters long
    if (!haryAp.validateMinLength(password, 8)) {
      return false;
    }
    // Password should contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    // Password should contain at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return false;
    }
    // Password should contain at least one digit
    if (!/\d/.test(password)) {
      return false;
    }
    return true;
  }
};

module.exports = gambypo;
