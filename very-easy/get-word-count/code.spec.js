const countWords = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(countWords('It\'s high noon')).toEqual(3);
        expect(countWords('Is this easy mode')).toEqual(4);
        expect(countWords('Is this easy mode')).toEqual(4);
    });
});
