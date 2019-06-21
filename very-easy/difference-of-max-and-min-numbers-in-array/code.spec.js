const differenceMaxMin = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(differenceMaxMin([10, 4, 1, 2, 8, 91])).toEqual(90);
        expect(differenceMaxMin([-70, 43, 34, 54, 22])).toEqual(124);
    });
});
