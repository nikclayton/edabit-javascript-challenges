const progressDays = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(progressDays([3, 4, 1, 2])).toEqual(2);
        expect(progressDays([10, 11, 12, 9, 10])).toEqual(3);
        expect(progressDays([6, 5, 4, 3, 2, 9])).toEqual(1);
        expect(progressDays([9, 9])).toEqual(0);
        expect(progressDays([12, 11, 10, 12, 11, 13])).toEqual(2);
    });
});
