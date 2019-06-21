const nextElement = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(nextElement([3, 5, 7, 9])).toEqual(11);
        expect(nextElement([-5, -6, -7])).toEqual(-8);
        expect(nextElement([2, 2, 2, 2, 2])).toEqual(2);
    });
});
