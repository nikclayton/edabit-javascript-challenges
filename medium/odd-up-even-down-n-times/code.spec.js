const evenOddTransform = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(evenOddTransform([3, 4, 9], 3)).toEqual([9, -2, 15]);
        expect(evenOddTransform([0, 0, 0], 10)).toEqual([-20, -20, -20]);
        expect(evenOddTransform([1, 2, 3], 1)).toEqual([3, 0, 5]);
        expect(evenOddTransform([55, 90, 830], 2)).toEqual([59, 86, 826]);
    });
});
