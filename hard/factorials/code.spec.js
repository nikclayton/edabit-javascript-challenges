const filterFactorials = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(filterFactorials([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 6]);
        expect(filterFactorials([1, 4, 120])).toEqual([1, 120]);
        expect(filterFactorials([8, 9, 10])).toEqual([]);
        expect(filterFactorials([1, 8, 9, 10])).toEqual([1]);
    });
});
