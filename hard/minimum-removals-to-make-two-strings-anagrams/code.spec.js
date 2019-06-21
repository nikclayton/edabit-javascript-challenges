const minRemovals = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(minRemovals('abcde', 'cab')).toEqual(2);
        expect(minRemovals('deafk', 'kfeap')).toEqual(2);
        expect(minRemovals('abc', 'ghi')).toEqual(6);
        expect(minRemovals('abcxyz', 'ghixytz')).toEqual(7);
    });
});
