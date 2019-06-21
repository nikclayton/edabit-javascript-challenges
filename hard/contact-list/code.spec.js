const sortContacts = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sortContacts(['John Locke', 'Thomas Aquinas', 'David Hume', 'Rene Descartes'], 'ASC')).toEqual(['Thomas Aquinas', 'Rene Descartes', 'David Hume', 'John Locke']);
        expect(sortContacts(['Paul Erdos', 'Leonhard Euler', 'Carl Gauss'], 'DESC')).toEqual(['Carl Gauss', 'Leonhard Euler', 'Paul Erdos']);
        expect(sortContacts(['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'], 'DESC')).toEqual(['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt']);
        expect(sortContacts(['Al Gore', 'Barack Obama'], 'ASC')).toEqual(['Al Gore', 'Barack Obama']);
        expect(sortContacts(['Albert Einstein'], 'ASC')).toEqual(['Albert Einstein']);
        expect(sortContacts([], 'DESC')).toEqual([]);
        expect(sortContacts(undefined, 'DESC')).toEqual([]);
        expect(sortContacts(undefined, 'DESC')).toEqual([]);
    });
});
