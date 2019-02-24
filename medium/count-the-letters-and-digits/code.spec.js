const countAll = require('./code');

describe('Tests', () => {
    test('Spaces are not letters.', () => {
        expect(countAll('edabit 2018')).toEqual({'LETTERS': 6, 'DIGITS': 4});
    });
    
    test('the tests', () => {
        expect(countAll('Hello')).toEqual({'LETTERS': 5, 'DIGITS': 0});
        expect(countAll('137')).toEqual({'LETTERS': 0, 'DIGITS': 3});
        expect(countAll('H3LL0')).toEqual({'LETTERS': 3, 'DIGITS': 2});
        expect(countAll('149990')).toEqual({'LETTERS': 0, 'DIGITS': 6});
        expect(countAll('    ')).toEqual({'LETTERS': 0, 'DIGITS': 0});
    });
});
