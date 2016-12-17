const mocha = require('mocha');
const expect = require('chai').expect;

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
		it('returns the String in question but with all characters in upper cases as applicable', () => {
			expect('andela'.toUpper()).to.equal('ANDELA');
			expect('Andela'.toUpper()).to.equal('ANDELA');
			expect('EXCELLENCE'.toUpper()).to.equal('EXCELLENCE');
		});
	});

	describe('toLower', () => {
		it('returns the String in question but with all characters in their lower cases as applicable', () => {
			expect('BRILLIANCE'.toLower()).to.equal('brilliance');
			expect('MAnnequiN'.toLower()).to.equal('mannequin');
			expect('andela'.toLower()).to.equal('andela');
		});
	});

	describe('ucFirst', () => {
		it('returns the String in question but changes the first character to an upper case', () => {
			expect('mama'.ucFirst()).to.equal('Mama');
			expect('nigeria'.ucFirst()).to.equal('Nigeria');
			expect('mONDAY'.ucFirst()).to.equal('Monday');
			expect('Money'.ucFirst()).to.equal('Money');
		});
	});

	describe('isQuestion', () => {
		it('returns true if the string is a question (ending with a question mark)', () => {
			expect('Who are you?'.isQuestion()).to.be.true;
			expect('Are you there?'.isQuestion()).to.be.true;
			expect('what?'.isQuestion()).to.be.true;
		});
		it('returns false if the string is not a question (ending with a question mark)', () => {
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
			expect('I am alive and well'.words()).to.equal(5);
			expect('I would like to play some songs'.words()).to.equal(7)
		});
	});

	describe('toCurrency', () => {
		it('returns a currency representation of the String', () => {
			expect('11111.11'.toCurrency()).to.equal('11,111.11');
			expect('2535678'.toCurrency()).to.equal('2,535,678.00')
		});
	});

	describe('fromCurrency', () => {
		it('returns a number representation of the currency string', () => {
			expect('11,111.11'.fromCurrency()).to.equal('11111.11');
			expect('2,535,678.00'.fromCurrency()).to.equal('2535678');
		});
	});

	describe('inverseCase', () => {
		it('returns each letter in the string as an inverse of its current case', () => {
			expect('Mr. Ben'.inverseCase()).to.equal('mR. bEN');
			expect('Good Morning'.inverseCase()).to.equal('gOOD mORNING');
			expect('john'.inverseCase()).to.equal('JOHN');
		});
	});

	describe('alternatingCase', () => {
		it('returns the letters in alternating cases. It must start with a lower case', () => {
			expect('Onomatopoeia'.alternatingCase()).to.equal('oNoMaToPoEiA');
			expect('blessing'.alternatingCase()).to.equal('bLeSsInG');
		});
	});

	describe('getMiddle', () => {
		it('', () => {

		});
	});

	describe('numberWords', () => {
		it('', () => {

		});
	});

	describe('isDigit', () => {
		it('', () => {

		});
	});

	describe('doubleCheck', () => {
		it('', () => {

		});
	});
});



