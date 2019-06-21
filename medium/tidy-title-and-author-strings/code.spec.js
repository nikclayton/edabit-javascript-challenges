const tidyBooks = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(tidyBooks(['     The Catcher in the Rye - J. D. Salinger    ', '    Brave New World - Aldous Huxley   ', '    Of Mice and Men - John Steinbeck    '])).toEqual([['The Catcher in the Rye', 'J. D. Salinger'], ['Brave New World', 'Aldous Huxley'], ['Of Mice and Men', 'John Steinbeck']]);
        expect(tidyBooks(['     The Grapes of Wrath - John Steinbeck    ', '    Great Expectations - Charles Dickens   ', '    The Scarlet Letter - Nathaniel Hawthorne    '])).toEqual([['The Grapes of Wrath', 'John Steinbeck'], ['Great Expectations', 'Charles Dickens'], ['The Scarlet Letter', 'Nathaniel Hawthorne']]);
    });
});
