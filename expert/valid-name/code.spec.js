const validName = require('./code');

describe('Tests', () => {
    test('Name must be 2 or 3 words.', () => {
        expect(validName('Herbert')).toEqual(false);
    });

test('Name must be 2 or 3 words', () => {
        expect(validName('Herbert W. G. Wells')).toEqual(false);
    });

test('Incorrect Capitalization.', () => {
        expect(validName('h. Wells')).toEqual(false);
    });

test('Incorrect Capitalization.', () => {
        expect(validName('herbert G. Wells')).toEqual(false);
    });

test('Initials must end with a dot.', () => {
        expect(validName('H Wells')).toEqual(false);
    });

test('Words cannot end with a dot.', () => {
        expect(validName('Herb. Wells')).toEqual(false);
    });

test('First name is initial but middle name is word.', () => {
        expect(validName('H. George Wells')).toEqual(false);
    });

test('Last name cannot be an initial.', () => {
        expect(validName('Herbert George W.')).toEqual(false);
    });
    
    test('the tests', () => {
        expect(validName('H. Wells')).toEqual(true);
        expect(validName('H. G. Wells')).toEqual(true);
        expect(validName('Herbert G. Wells')).toEqual(true);
        expect(validName('Herbert George Wells')).toEqual(true);
    });
});
