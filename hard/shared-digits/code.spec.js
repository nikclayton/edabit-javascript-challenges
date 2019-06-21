const sharedDigits = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sharedDigits([33, 53, 6351, 12, 2242, 44])).toEqual(true);
        expect(sharedDigits([1, 11, 12, 13, 14, 15, 16])).toEqual(true);
        expect(sharedDigits([33, 44, 55, 66, 77])).toEqual(false);
        expect(sharedDigits([1, 12, 123, 1234, 1235, 6789])).toEqual(false);
        expect(sharedDigits([5789, 798, 98, 995, 599, 699])).toEqual(true);
        expect(sharedDigits([5, 4, 44, 444])).toEqual(false);
        expect(sharedDigits([5, 65, 66, 76, 78])).toEqual(true);
        expect(sharedDigits([5, 55, 665, 66665555, 65, 66, 76, 78, 989])).toEqual(true);
        expect(sharedDigits([5, 55, 665, 4444, 65, 66, 76, 78, 989])).toEqual(false);
    });
});
