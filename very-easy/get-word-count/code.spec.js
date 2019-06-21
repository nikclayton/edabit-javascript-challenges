const countWords = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countWords('It\'s high noon')).toEqual(3);
        expect(countWords('Is this easy mode')).toEqual(4);
        expect(countWords('What an easy task, right')).toEqual(5);
        expect(countWords('This is a test')).toEqual(4);
        expect(countWords('Just an example here move along')).toEqual(6);
        expect(countWords('How are you today?')).toEqual(4);
    });
});
