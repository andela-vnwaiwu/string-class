/**
 * Javascript String Class Extension
 * This methods extends the String class prototype methods
 */

const stringClassExtensions = {
  /**
   * Returns true if the string contains vowels.
   * @returns {Boolean}
   */
  hasVowels() {
    const vowelRegex = /[aeiou]/i;
    return vowelRegex.test(this);
  },

  /**
   * Returns the String in question but with all characters in upper cases as applicable.
   * @returns {String}
   */
  toUpper() {
    return this.replace(/[a-z]/g, match => String
      .fromCharCode(match.charCodeAt(0) - 32));
  },

  /**
   * Returns the String in question but with all characters in their lower cases as applicable.
   * @returns {String}
   */
  toLower() {
    return this.replace(/[A-Z]/g, match => String
      .fromCharCode(match.charCodeAt(0) + 32));
  },

  /**
   * Returns the String in question but changes the First Character to an Upper case.
   * @returns {String}
   */
  ucFirst() {
    return this.replace(this[0], this[0].toUpper());
  },

  /**
   * Returns true if the string is a question (ending with a question mark)
   * @returns {Boolean}
   */
  isQuestion() {
    const regexType = /\?$/g;
    return regexType.test(this);
  },

  /**
   * Returns a list of the words in the string, as an Array.
   * @returns {Array}
   */
  words() {
    return this.replace(/[^a-z0-9A-Z\s]/g, '').split(/\s+/);
  },

  /**
   * Returns the number of words in the string
   * @returns {Number}
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Returns a currency representation of the String
   * @returns {String}
   */
  toCurrency() {
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
   * Returns a number representation of the Currency String
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
   * Returns each letter in the string as an inverse of its current case
   * @returns {String}
   */
  inverseCase() {
    return this.replace(/\w/g, character => (/[a-z]/
      .test(character) ? character.toUpper() : character.toLower()));
  },

  /**
   * Returns the letters in alternating cases. It must start with a lower case
   * @returns {String}
   */
  alternatingCase() {
    return this.replace(/\w/g, (match, count) =>
      (count % 2 === 0 ? match.toLower() : match.toUpper()));
  },

  /**
   * Returns the character(s) in the middle of the string
   * @returns {String}
   */
  getMiddle() {
    const middlePosition = this.length / 2;
    return (middlePosition === parseInt(middlePosition, 10))
      ? this.substr(middlePosition - 1, 2) : this.charAt(middlePosition);
  },

   /**
   * Returns true if a string contains double characters(including whitespace character)
   * @return {Boolean}
   */
  doubleCheck() {
    return /(.)\1{1}/.test(this);
  },

  /**
   * Test if string is single digit
   * @return {Boolean}
   */
  isDigit() {
    return /^\d{1}$/g.test(this);
  },

  /**
   * Returns the numbers in words e.g 325 should return three two five.
   * @returns {String}
   */
  numberWords() {
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
