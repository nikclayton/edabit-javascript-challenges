const initialize = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(initialize(['Sherlock Holmes', 'John Watson', 'Irene Adler'])).toEqual(['S. H.', 'J. W.', 'I. A.']);
        expect(initialize(['Harry Potter', 'Ron Weasley'])).toEqual(['H. P.', 'R. W.']);
        expect(initialize(['Stephen Hawking'])).toEqual(['S. H.']);
        expect(initialize(['Atticus Finch'])).toEqual(['A. F.']);
        expect(initialize(['Leonardo DiCaprio'])).toEqual(['L. D.']);
    });
});
