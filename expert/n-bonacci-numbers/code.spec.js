const bonacci = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(bonacci(2, 7)).toEqual(8);
        expect(bonacci(3, 13)).toEqual(274);
        expect(bonacci(5, 24)).toEqual(203513);
        expect(bonacci(8, 44)).toEqual(32440904961);
        expect(bonacci(1, 4)).toEqual(1);
        expect(bonacci(2, 2)).toEqual(1);
        expect(bonacci(3, 1)).toEqual(0);
    });
});
