const sortByString = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sortByString(['apple', 'banana', 'cherry', 'date'], 'dbca')).toEqual(['date', 'banana', 'cherry', 'apple']);
        expect(sortByString(['small', 'big', 'medium'], 'sazymtb')).toEqual(['small', 'medium', 'big']);
        expect(sortByString(['poof', 'floof', 'loop'], 'flatp')).toEqual(['floof', 'loop', 'poof']);
        expect(sortByString(['yellow', 'phone', 'book'], 'abcdpy')).toEqual(['book', 'phone', 'yellow']);
    });
});
