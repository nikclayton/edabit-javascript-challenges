const unravel = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(unravel('abc')).toEqual(['abc']);
        expect(unravel('a[b|c]')).toEqual(['ab', 'ac']);
        expect(unravel('a[b|c|d]e')).toEqual(['abe', 'ace', 'ade']);
        expect(unravel('a[b|cd]ef')).toEqual(['abef', 'acdef']);
        expect(unravel('a[b|c]def[g]')).toEqual(['abdefg', 'acdefg']);
        expect(unravel('a[b|c]de[f|g]')).toEqual(['abdef', 'abdeg', 'acdef', 'acdeg']);
        expect(unravel('a[b]c[d]')).toEqual(['abcd']);
        expect(unravel('[a][b][c][d]')).toEqual(['abcd']);
        expect(unravel('[a][b][c]d[e]')).toEqual(['abcde']);
        expect(unravel('[a][b][c]d[e|f|g]')).toEqual(['abcde', 'abcdf', 'abcdg']);
        expect(unravel('[a|b][c|d][e|f]')).toEqual(['ace', 'acf', 'ade', 'adf', 'bce', 'bcf', 'bde', 'bdf']);
        expect(unravel('[a][b|c|d][e][f|g]')).toEqual(['abef', 'abeg', 'acef', 'aceg', 'adef', 'adeg']);
        expect(unravel('apple [pear|grape]')).toEqual(['apple grape', 'apple pear']);
        expect(unravel('apple [pear|grape] [persimmon|mango] [cherry|apricot]')).toEqual(['apple grape mango apricot', 'apple grape mango cherry', 'apple grape persimmon apricot', 'apple grape persimmon cherry', 'apple pear mango apricot', 'apple pear mango cherry', 'apple pear persimmon apricot', 'apple pear persimmon cherry']);
        expect(unravel('Let\'s do [Friday|Wednesday|Saturday] at [4|5|7] for the [concert|movies]?')).toEqual(['Let\'s do Friday at 4 for the concert?', 'Let\'s do Friday at 4 for the movies?', 'Let\'s do Friday at 5 for the concert?', 'Let\'s do Friday at 5 for the movies?', 'Let\'s do Friday at 7 for the concert?', 'Let\'s do Friday at 7 for the movies?', 'Let\'s do Saturday at 4 for the concert?', 'Let\'s do Saturday at 4 for the movies?', 'Let\'s do Saturday at 5 for the concert?', 'Let\'s do Saturday at 5 for the movies?', 'Let\'s do Saturday at 7 for the concert?', 'Let\'s do Saturday at 7 for the movies?', 'Let\'s do Wednesday at 4 for the concert?', 'Let\'s do Wednesday at 4 for the movies?', 'Let\'s do Wednesday at 5 for the concert?', 'Let\'s do Wednesday at 5 for the movies?', 'Let\'s do Wednesday at 7 for the concert?', 'Let\'s do Wednesday at 7 for the movies?']);
    });
});
