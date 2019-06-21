const identicalFilter = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz'])).toEqual(['aaaaaa', 'd', 'eeee']);
        expect(identicalFilter(['88', '999', '22', '545', '133'])).toEqual(['88', '999', '22']);
        expect(identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo'])).toEqual([]);
        expect(identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee'])).toEqual(['aa', 'bb', 'cc', 'dd', 'ee']);
        expect(identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee'])).toEqual(['eee']);
        expect(identicalFilter(['1', '2', '3'])).toEqual(['1', '2', '3']);
    });
});
