const countOnes = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(countOnes(12)).toEqual(2);
        expect(countOnes(0)).toEqual(0);
        expect(countOnes(100)).toEqual(3);
        expect(countOnes(101)).toEqual(4);
        expect(countOnes(999)).toEqual(8);
        expect(countOnes(1000000000)).toEqual(13);
        expect(countOnes(123456789)).toEqual(16);
        expect(countOnes(1234567890)).toEqual(12);
    });
});
