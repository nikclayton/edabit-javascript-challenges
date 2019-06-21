const checkEquals = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(checkEquals([1, 2], [1, 3])).toEqual(false);
        expect(checkEquals([1, 2], [1, 2])).toEqual(true);
        expect(checkEquals([4, 5, 6], [4, 5, 6])).toEqual(true);
        expect(checkEquals([4, 7, 6], [4, 5, 6])).toEqual(false);
    });
});
