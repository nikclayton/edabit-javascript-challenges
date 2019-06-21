const additiveInverse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(additiveInverse([5, -7, 8, 3])).toEqual([-5, 7, -8, -3]);
        expect(additiveInverse([1, 1, 1, 1, 1])).toEqual([-1, -1, -1, -1, -1]);
        expect(additiveInverse([-5, -25, 35])).toEqual([5, 25, -35]);
    });
});
