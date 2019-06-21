const combinator = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(combinator([['a']])).toEqual(['a']);
        expect(combinator([['ab'], ['ba']])).toEqual(['abba']);
        expect(combinator([['a', 'b']])).toEqual(['a', 'b']);
        expect(combinator([['a', 'b'], ['c', 'd']])).toEqual(['ac', 'ad', 'bc', 'bd']);
        expect(combinator([['a', 'b'], ['c', 'd'], ['e', 'f']])).toEqual(['ace', 'acf', 'ade', 'adf', 'bce', 'bcf', 'bde', 'bdf']);
        expect(combinator([['foo', 'bar'], ['baz', 'bamboo']], ' ')).toEqual(['foo baz', 'foo bamboo', 'bar baz', 'bar bamboo']);
        expect(combinator([[]])).toEqual([]);
        expect(combinator([['a', 'b'], [], ['e', 'f']])).toEqual([]);
        expect(combinator([[], ['e', 'f']])).toEqual([]);
    });
});
