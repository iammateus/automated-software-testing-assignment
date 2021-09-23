import Text from '../src/Text';

const faker = require('faker');

describe('Text', () => {
    it('should exist as a class', () => {
        expect(Text.name).toEqual('Text');
    });

    it('should instanciate with a string argument', () => {
        const text: Text = new Text(faker.lorem.word());
        expect(text).toBeInstanceOf(Text);
    });
});

describe('Text.isPalindrome', () => {
    it('should exist as a function', () => {
        const text: Text = new Text(faker.lorem.word());
        expect(text.isPalindrome).toBeInstanceOf(Function);
    });

    it('should return true when text is palindrome (“Rotator”)', () => {
        const text = new Text('Rotator');
        expect(text.isPalindrome()).toBe(true);
    });

    it('should return true when text is palindrome (bob)', () => {
        const text = new Text('bob');
        expect(text.isPalindrome()).toBe(true);
    });

    it('should return true when text is palindrome (madam)', () => {
        const text = new Text('madam');
        expect(text.isPalindrome()).toBe(true);
    });

    it('should return true when text is palindrome (mAlAyAlam)', () => {
        const text = new Text('mAlAyAlam');
        expect(text.isPalindrome()).toBe(true);
    });

    it('should return true when text is palindrome (1)', () => {
        const text = new Text('1');
        expect(text.isPalindrome()).toBe(true);
    });

    it('should return true when text is palindrome (Able was I, ere I saw Elba)', () => {
        const text = new Text('Able was I, ere I saw Elba');
        expect(text.isPalindrome()).toBe(true);
    });

    it('should return true when text is palindrome (Madam I’m Adam)', () => {
        const text = new Text('Madam I’m Adam');
        expect(text.isPalindrome()).toBe(true);
    });

    it('should return true when text is palindrome (Step on no pets.)', () => {
        const text = new Text('Step on no pets.');
        expect(text.isPalindrome()).toBe(true);
    });

    it('should return true when text is palindrome (Top spot!)', () => {
        const text = new Text('Top spot!');
        expect(text.isPalindrome()).toBe(true);
    });

    it('should return true when text is palindrome (02/02/2020!)', () => {
        const text = new Text('02/02/2020');
        expect(text.isPalindrome()).toBe(true);
    });
});
