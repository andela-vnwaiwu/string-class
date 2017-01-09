const stringClassExtensions = {

  /**
   * hasVowels
   * Returns true if the string contains vowels or false if it does not
   * @returns {Boolean} true or false
   */
  hasVowels() {
    const vowelRegex = /[aeiou]/i;
    return vowelRegex.test(this);
  },

  /**
   * toUpper
   * Returns the String in question but with
   * all characters in upper cases as applicable
   * @returns {String} string with all characters in upper case
   */
  toUpper() {
    return this.replace(/[a-z]/g, match => String
      .fromCharCode(match.charCodeAt(0) - 32));
  },

  /**
   * toLower
   * Returns the string in question but with all
   * characters in their lower cases as applicable
   * @returns {String} string with all characters to lower case
   */
  toLower() {
    return this.replace(/[A-Z]/g, match => String
      .fromCharCode(match.charCodeAt(0) + 32));
  },

  /**
   * ucFirst
   * Returns the string in question but changes the first character
   * to an Upper case.
   * @returns {String} string with capitalized first letter
   */
  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

  /**
   * isQuestion
   * Returns true if the string is a question (ending with a question mark)
   * @returns {Boolean} true or false
   */
  isQuestion() {
    const regexType = /\?$/g;
    return regexType.test(this);
  },

  /**
   * words
   * Returns a list of the words in the string, as an Array
   * @returns {Array} array of words in the string
   */
  words() {
    return this.replace(/[^a-z0-9A-Z\s]/g, '').split(/\s+/);
  },

  /**
   * wordCount
   * Returns the number of words in the string
   * @returns {Number} number of words in the string
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * toCurrency
   * Returns a currency representation of the String
   * @returns {String} string of numbers
   */
  toCurrency() {
    if (!Number(this)) {
      return 'This is not a Number';
    }
    let [number, decimal] = this.split(/\./g);
    if (decimal === undefined) {
      decimal = '00';
    } else {
      decimal = decimal.substring(0, 2);
    }
    number = number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return `${number}.${decimal}`;
  },

  /**
   * fromCurrency
   * Returns a number representation of the Currency String
   * @returns {String} string of numbers
   */
  fromCurrency() {
    let [number, decimal] = this.split(/\./g);
    if (decimal === undefined) {
      decimal = '';
      number = number.split(/,/g).join('');
      return `${number}${decimal}`;
    }
    number = number.split(/,/g).join('');
    return `${number}.${decimal}`;
  },

  /**
   * inverseCase
   * Returns each letter in the string as an inverse of its current case
   * @returns {String} inverted form of the string
   */
  inverseCase() {
    return this.replace(/\w/g, character => (/[a-z]/
      .test(character) ? character.toUpper() : character.toLower()));
  },

  /**
   * alternatingCase
   * Returns the letters in alternating cases. It must start with a lower case
   * @returns {String} string in alternating cases starting with lower case
   */
  alternatingCase() {
    return this.replace(/\w/g, (match, count) =>
      (count % 2 === 0 ? match.toLower() : match.toUpper()));
  },

  /**
   * getMiddle
   * Returns the character(s) in the middle of the string
   * @returns {String} character(s) in the middle of the string
   */
  getMiddle() {
    const middlePosition = this.length / 2;
    return (middlePosition === parseInt(middlePosition, 10))
      ? this.substr(middlePosition - 1, 2) : this.charAt(middlePosition);
  },

   /**
    * doubleCheck
   * Returns true if a string contains double characters
   * (including whitespace character)
   * @return {Boolean} true or false
   */
  doubleCheck() {
    return /(.)\1{1}/.test(this);
  },

  /**
   * isDigit
   * Test if string is single digit
   * @return {Boolean} true or false
   */
  isDigit() {
    return /^\d{1}$/g.test(this);
  },

  /**
   * numberWords
   * Returns the numbers in words e.g 325 should return three two five.
   * @returns {String} string form of numbers
   */
  numberWords() {
    if (!Number(this)) {
      return 'This is not a Number';
    }
    const digitWordsMap = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    };
    return this.toString().replace(/\d/g, n => `${digitWordsMap[n]} `).trim();
  }
};

Object.assign(String.prototype, stringClassExtensions);
