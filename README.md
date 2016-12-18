[![Build Status](https://travis-ci.org/andela-vnwaiwu/string-class.svg?branch=develop)](https://travis-ci.org/andela-vnwaiwu/string-class)   [![Coverage Status](https://coveralls.io/repos/github/andela-vnwaiwu/string-class/badge.svg?branch=develop)](https://coveralls.io/github/andela-vnwaiwu/string-class?branch=develop)  [![Code Climate](https://codeclimate.com/github/andela-vnwaiwu/string-class/badges/gpa.svg)](https://codeclimate.com/github/andela-vnwaiwu/string-class)
# String Class
This is the repository that extends the String class in Javascript. Using Prototype Oriented Programming, methods, procedures and instance attributes are added to the String class to support more string manipulation features.

### How can I get started with the class?

- To use the application locally, clone the repository, type cd string-class in the command prompt and run npm install. It will download all dependencies.
- Run ```npm test``` to see the test results  and all available methods.

### External Dependencies for the app

Javascript(ECMAScript 2015)
Node.js

### How do I run the tests?

running ```npm test``` on the command line also displays the result on the command line

### What are the available methods?

The available methods of this Class are listed below:

- ```hasVowels (typeof Boolean)```: Returns true if the string contains vowels. This method must implement Regular Expression.

- ```toUpper (typeof String)```: Returns the String in question but with all characters in upper cases as applicable. This method should be implemented without the use of the toUpperCase internal methods.

- ```toLower (typeof String)```: Returns the String in question but with all characters in their lower cases as applicable. This method should be implemented without the use of the toLowerCase internal methods.

- ```ucFirst (typeof String)```: Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.

- ```isQuestion (typeof Boolean)```: Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.

- ```words (typeof Object, instanceof Array)```: Returns a list of the words in the string, as an Array. This method must implement Regular Expression.

- ```wordCount (typeof Number)```: Returns the number of words in the string. It must make use of the words method above.

- ```toCurrency (typeof String)```: Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

- ```fromCurrency (typeof Number)```: Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11

- ```inverseCase (typeof String)```: Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.

- ```alternatingCase (typeof String)```: Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.

- ```getMiddle (typeof String)```: Returns the character(s) in the middle of the string e.g read should return ea and reads should return a.

- ```numberWords (typeof String)```: Returns the numbers in words e.g 325 should return three two five.

- ```isDigit (typeof Boolean)```: Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This method must implement Regular Expression.

- ```doubleCheck (typeof Boolean)```: Returns true if a string contains double characters(including whitespace character) e.g aa, !!, should return true.

### What are the limitations
The limitations of this class is that it is not a standalone class but built on the ```String.prototype```
of the string class

## Contributing
Fork this repository to your account.
Clone your repositry: git clone git@github.com:your-username/string-class.git OR git clone https://github.com/your-username/string-class.git
Create your feature branch: git checkout -b new-feature
Commit your changes: git commit -m "did something"
Push to the remote branch: git push origin new-feature
Open a pull request.