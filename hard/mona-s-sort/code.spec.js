const numberOfSwaps = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(numberOfSwaps([3, 9, 7, 4])).toEqual(3);
        expect(numberOfSwaps([5, 4, 3])).toEqual(3);
        expect(numberOfSwaps([5, 4, 3, 2])).toEqual(6);
        expect(numberOfSwaps([1, 2, 4, 3])).toEqual(1);
        expect(numberOfSwaps([1, 2, 5, 4, 3])).toEqual(3);
        expect(numberOfSwaps([1, 3, 4, 5])).toEqual(0);
        expect(numberOfSwaps([1, 2])).toEqual(0);
    });
});
