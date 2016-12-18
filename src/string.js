const stringClass = {

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
    let result = ''
    function convert (character) {
      return String.fromCharCode(character.charCodeAt(0) - 32);
    }
    for (let i = 0; i < this.length; i += 1) {
      if(/[A-Z]/g.test(this[i])) {
        result += this[i];
      } else {
        result += convert(this[i]);
      }
    }
    return result;
  },
  
  /**
   * Returns the String in question but with all characters in their lower cases as applicable.
   * @returns {String}
   */
  toLower() {
    let result = ''
    function convert (character) {
      return String.fromCharCode(character.charCodeAt(0) + 32);
    }
    for (let i = 0; i < this.length; i += 1) {
      if(/[a-z]/g.test(this[i])) {
        result += this[i];
      } else {
        result += convert(this[i]);
      }
    }
    return result;
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
    const regexType = /[?]$/g;
    return regexType.test(this);
  },
  
};

Object.assign(String.prototype, stringClass);
