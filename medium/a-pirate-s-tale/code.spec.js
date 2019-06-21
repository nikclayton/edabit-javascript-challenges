const numberOfDays = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(numberOfDays([10, 10])).toEqual(23);
        expect(numberOfDays([3, 3])).toEqual(7);
        expect(numberOfDays([-10, -9])).toEqual(22);
        expect(numberOfDays([-1, -4])).toEqual(5);
        expect(numberOfDays([-10, -2])).toEqual(14);
        expect(numberOfDays([3, 30])).toEqual(39);
        expect(numberOfDays([40, 1])).toEqual(49);
        expect(numberOfDays([3, 5])).toEqual(9);
    });
});
