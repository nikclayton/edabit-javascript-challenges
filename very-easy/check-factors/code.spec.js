const checkFactors = require('./code');

describe('Tests', () => {
    test('8 is not a factor of 12', () => {
        expect(checkFactors([1, 2, 3, 8], 12)).toEqual(false);
    });

test('499 is not a factor of 500', () => {
        expect(checkFactors([5, 10, 499], 500)).toEqual(false);
    });

test('6 is not a factor of 9', () => {
        expect(checkFactors([3, 6], 9)).toEqual(false);
    });
    
    test('the tests', () => {
        expect(checkFactors([2, 3, 4], 12)).toEqual(true);
        expect(checkFactors([1, 2, 50], 100)).toEqual(true);
        expect(checkFactors([1, 9, 81], 81)).toEqual(true);
        expect(checkFactors([5, 10, 50], 500)).toEqual(true);
    });
});
