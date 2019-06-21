const mean = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])).toEqual(2.55);
        expect(mean([324, 543, 654, 9876])).toEqual(2849.25);
        expect(mean([0, 0, 0, 0])).toEqual(0);
        expect(mean([30, 40, 20, 100, 30])).toEqual(44);
        expect(mean([1, 1, 1, 0])).toEqual(0.75);
        expect(mean([1, 1, 0, 1, 2, 1, 1, 1, 0, 0])).toEqual(0.8);
        expect(mean([10000])).toEqual(10000);
    });
});
