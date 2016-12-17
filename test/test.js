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

	});

	describe('wordCount', () => {

	});

	describe('toCurrency', () => {

	});

	describe('fromCurrency', () => {
		
	});

	describe('invereCase', () => {

	});

	describe('alternatingCase', () => {

	});

	describe('getMiddle', () => {

	});

	describe('numberWords', () => {

	});

	describe('isDigit', () => {

	});

	describe('doubleCheck', () => {

	});
});



