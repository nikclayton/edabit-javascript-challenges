const percentageHappy = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(percentageHappy([0, 1, 0, 1, 0])).toEqual(0);
        expect(percentageHappy([0, 1, 1, 0])).toEqual(0.5);
        expect(percentageHappy([0, 0, 0, 1, 1])).toEqual(1);
        expect(percentageHappy([1, 0, 0, 1, 1])).toEqual(0.8);
        expect(percentageHappy([1, 1, 1, 1, 1])).toEqual(1);
        expect(percentageHappy([1, 1, 0, 0, 1, 1])).toEqual(1);
        expect(percentageHappy([1, 1, 0, 0, 0, 1, 1])).toEqual(1);
        expect(percentageHappy([1, 0, 0, 0, 1])).toEqual(0.6);
        expect(percentageHappy([1, 0, 1, 0, 0, 0])).toEqual(0.5);
        expect(percentageHappy([1, 1])).toEqual(1);
        expect(percentageHappy([1, 0])).toEqual(0);
    });
});
