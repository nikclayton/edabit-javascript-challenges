const changeEnough = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(changeEnough([2, 100, 0, 0], 14.11)).toEqual(false);
        expect(changeEnough([0, 0, 20, 5], 0.75)).toEqual(true);
        expect(changeEnough([30, 40, 20, 5], 12.55)).toEqual(true);
        expect(changeEnough([10, 0, 0, 50], 13.85)).toEqual(false);
        expect(changeEnough([1, 0, 5, 219], 19.99)).toEqual(false);
        expect(changeEnough([1, 0, 2555, 219], 127.75)).toEqual(true);
        expect(changeEnough([1, 335, 0, 219], 35.21)).toEqual(true);
    });
});
