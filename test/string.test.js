/* eslint no-unused-expressions: 0 */
const mocha = require('mocha');
const expect = require('chai').expect;

require('../src/string');

describe('String Class', () => {
  describe('hasVowels', () => {
    it('returns true if the string contains vowel letters', () => {
      expect('vowel'.hasVowels()).to.be.true;
      expect('aeroplane'.hasVowels()).to.be.true;
    });
    it('returns false if the string does not contain vowel letters', () => {
      expect('sdghrtyv'.hasVowels()).to.be.false;
      expect('hbvcnmftyd'.hasVowels()).to.be.false;
    });
  });

  describe('toUpper', () => {
    it(`returns the String in question but with all characters in upper cases
        as applicable`, () => {
      expect('andela'.toUpper()).to.equal('ANDELA');
      expect('Andela'.toUpper()).to.equal('ANDELA');
      expect('EXCELLENCE'.toUpper()).to.equal('EXCELLENCE');
    });
  });

  describe('toLower', () => {
    it(`returns the String in question but with all characters in their lower
        cases as applicable`, () => {
      expect('BRILLIANCE'.toLower()).to.equal('brilliance');
      expect('MAnnequiN'.toLower()).to.equal('mannequin');
      expect('andela'.toLower()).to.equal('andela');
    });
  });

  describe('ucFirst', () => {
    it(`returns the String in question but changes the first character to an
        upper case`, () => {
      expect('mama'.ucFirst()).to.equal('Mama');
      expect('nigeria'.ucFirst()).to.equal('Nigeria');
      expect('mONDAY'.ucFirst()).to.equal('MONDAY');
      expect('Money'.ucFirst()).to.equal('Money');
    });
  });

  describe('isQuestion', () => {
    it(`returns true if the string is a question 
        (ending with a question mark)`, () => {
      expect('Who are you?'.isQuestion()).to.be.true;
      expect('Are you there?'.isQuestion()).to.be.true;
      expect('what?'.isQuestion()).to.be.true;
    });
    it(`returns false if the string is not a question
        (ending with a question mark)`, () => {
      expect('where are you'.isQuestion()).to.be.false;
      expect('welcome home'.isQuestion()).to.be.false;
    });
  });

  describe('words', () => {
    it('returns a list of the words in the string as an Array', () => {
      expect('I love good food'.words()).to.be.instanceof(Array);
      expect('I love good food'.words()).to.be.an('array');
    });
  });

  describe('wordCount', () => {
    it('returns the number of words in the string', () => {
      expect('I am alive and well'.wordCount()).to.equal(5);
      expect('I would like to play some songs'.wordCount()).to.equal(7);
    });
  });

  describe('toCurrency', () => {
    it('returns a currency representation of the String', () => {
      expect('11111.11'.toCurrency()).to.equal('11,111.11');
      expect('2535678'.toCurrency()).to.equal('2,535,678.00');
    });
    it('returns an error message if the string is not of a "number"', () => {
      expect('Mother'.toCurrency()).to.deep.equal('This is not a Number');
      expect('Andela'.toCurrency()).to.deep.equal('This is not a Number');
    });
  });

  describe('fromCurrency', () => {
    it('returns a number representation of the currency string', () => {
      expect('11,111.11'.fromCurrency()).to.equal('11111.11');
      expect('2,535,678.00'.fromCurrency()).to.equal('2535678.00');
      expect('2,535,678'.fromCurrency()).to.equal('2535678');
    });
  });

  describe('inverseCase', () => {
    it(`returns each letter in the string as an inverse of 
        its current case`, () => {
      expect('Mr. Ben'.inverseCase()).to.equal('mR. bEN');
      expect('Good Morning'.inverseCase()).to.equal('gOOD mORNING');
      expect('john'.inverseCase()).to.equal('JOHN');
    });
  });

  describe('alternatingCase', () => {
    it(`returns the letters in alternating cases. 
        It must start with a lower case`, () => {
      expect('Onomatopoeia'.alternatingCase()).to.equal('oNoMaToPoEiA');
      expect('blessing'.alternatingCase()).to.equal('bLeSsInG');
    });
  });

  describe('getMiddle', () => {
    it('returns the character(s) in the middle of the string', () => {
      expect('friend'.getMiddle()).to.equal('ie');
      expect('friends'.getMiddle()).to.equal('e');
    });
  });

  describe('numberWords', () => {
    it('returns the numbers in words', () => {
      expect('325'.numberWords()).to.deep.equal('three two five');
      expect('3465'.numberWords()).to.deep.equal('three four six five');
    });
    it('returns an error message if the text is not of type "number"', () => {
      expect('Family'.numberWords()).to.deep.equal('This is not a Number');
      expect('Brother'.numberWords()).to.deep.equal('This is not a Number');
    });
  });

  describe('isDigit', () => {
    it('returns true if the string is a digit(one number)', () => {
      expect('4'.isDigit()).to.be.true;
    });
    it('returns false if the string is not a digit(one number)', () => {
      expect('465'.isDigit()).to.be.false;
    });
    it('returns false if the text is not of type "number"', () => {
      expect('Mother'.isDigit()).to.be.false;
    });
  });

  describe('doubleCheck', () => {
    it(`returns true if a string contains double characters
        (including whitespace character)`, () => {
      expect('egg Head'.doubleCheck()).to.be.true;
      expect('greed'.doubleCheck()).to.be.true;
      expect('cool  Aid'.doubleCheck()).to.be.true;
    });
    it(`returns false if a string does not contains double 
        characters(including whitespace character)`, () => {
      expect('bread'.doubleCheck()).to.be.false;
      expect('dragon'.doubleCheck()).to.be.false;
    });
  });
});
