const canFind = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(canFind(['at', 'be', 'th', 'au'], ['beautiful', 'the', 'hat'])).toEqual(true);
        expect(canFind(['bo', 'ta', 'el', 'st', 'ca'], ['books', 'table', 'cap', 'hostel'])).toEqual(true);
        expect(canFind(['la', 'te'], ['latte'])).toEqual(true);
        expect(canFind(['th', 'fo', 'ma', 'or'], ['the', 'many', 'for', 'forest'])).toEqual(true);
        expect(canFind(['ay', 'be', 'ta', 'cu'], ['maybe', 'beta', 'abet', 'course'])).toEqual(false);
        expect(canFind(['oo', 'mi', 'ki', 'la'], ['milk', 'chocolate', 'cooks'])).toEqual(false);
        expect(canFind(['la'], [])).toEqual(false);
        expect(canFind(['la', 'at', 'te', 'ea'], ['latte'])).toEqual(false);
    });
});
