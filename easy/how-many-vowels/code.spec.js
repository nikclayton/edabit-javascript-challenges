const countVowels = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countVowels('Celebration')).toEqual(5);
        expect(countVowels('Palm')).toEqual(1);
        expect(countVowels('Prediction')).toEqual(4);
        expect(countVowels('Suite')).toEqual(3);
        expect(countVowels('Quote')).toEqual(3);
        expect(countVowels('Portrait')).toEqual(3);
        expect(countVowels('Steam')).toEqual(2);
        expect(countVowels('Tape')).toEqual(2);
        expect(countVowels('Nightmare')).toEqual(3);
        expect(countVowels('Convention')).toEqual(4);
    });
});
