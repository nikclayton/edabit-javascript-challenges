const incrementToTop = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(incrementToTop([3, 4, 5])).toEqual(3);
        expect(incrementToTop([4, 3, 4])).toEqual(1);
        expect(incrementToTop([3, 3, 3])).toEqual(0);
        expect(incrementToTop([3, 10, 3])).toEqual(14);
        expect(incrementToTop([1, 2, 3, 4, 5])).toEqual(10);
    });
});
