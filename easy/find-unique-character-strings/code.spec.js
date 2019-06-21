const filterUnique = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb'])).toEqual(['abc']);
        expect(filterUnique(['88', '999', '989', '9988', '9898'])).toEqual([]);
        expect(filterUnique(['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC'])).toEqual(['ABCDE', 'BED', 'BAC']);
        expect(filterUnique(['qrrs', 'srrq', 'qqrs', 'qq', 'ss', 'rs'])).toEqual(['rs']);
        expect(filterUnique(['abab', 'ba', 'ab', 'cc'])).toEqual(['ba', 'ab']);
    });
});
