const isRepeatingCycle = require('./code');

describe('Tests', () => {
    test('Trivially repeating, since array is identical.', () => {
        expect(isRepeatingCycle([1, 1, 1, 1], 3)).toEqual(true);
    });

test('Trivially repeating, since the cycle length = length of the array.', () => {
        expect(isRepeatingCycle([1, 2, 1, 9], 4)).toEqual(true);
    });

test('Cycle length exceeds array length, so trivially true.', () => {
        expect(isRepeatingCycle([1, 1, 3, 1, 1], 7)).toEqual(true);
    });
    
    test('the tests', () => {
        expect(isRepeatingCycle([1, 2, 3, 1, 2, 3, 1], 3)).toEqual(true);
        expect(isRepeatingCycle([1, 2, 3, 4, 2, 3, 1], 4)).toEqual(false);
        expect(isRepeatingCycle([1, 2, 1, 2, 2], 2)).toEqual(false);
        expect(isRepeatingCycle([1, 2, 1, 2, 1, 2, 1], 3)).toEqual(false);
        expect(isRepeatingCycle([1, 2, 1, 2, 1, 2, 1], 2)).toEqual(true);
        expect(isRepeatingCycle([1, 2, 1, 2, 1, 2, 1], 4)).toEqual(true);
    });
});
