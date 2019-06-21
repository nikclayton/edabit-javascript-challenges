const getLanguages = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getLanguages(32)).toEqual(['Python']);
        expect(getLanguages(25)).toEqual(['C#', 'JavaScript', 'PHP']);
        expect(getLanguages(100)).toEqual(['Java', 'Python', 'Ruby']);
        expect(getLanguages(255)).toEqual(['C#', 'C++', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift']);
        expect(getLanguages(53)).toEqual(['C#', 'Java', 'PHP', 'Python']);
        expect(getLanguages(12)).toEqual(['Java', 'JavaScript']);
    });
});
