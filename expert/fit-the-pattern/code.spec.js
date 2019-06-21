const checkPattern = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(checkPattern([[1, 1], [2, 2], [1, 1], [2, 2]], 'ABAB')).toEqual(true);
        expect(checkPattern([[1, 2], [1, 2], [1, 2], [1, 2]], 'AAAA')).toEqual(true);
        expect(checkPattern([[1, 2], [1, 3], [1, 4], [1, 2]], 'ABCA')).toEqual(true);
        expect(checkPattern([[1, 2, 3], [1, 2, 3], [3, 2, 1], [3, 2, 1]], 'AABB')).toEqual(true);
        expect(checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], 'ABCD')).toEqual(true);
        expect(checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], 'DCBA')).toEqual(true);
        expect(checkPattern([[8], [7], [6], [6]], 'ABCC')).toEqual(true);
        expect(checkPattern([[8], [9], [9], [9]], 'ABBB')).toEqual(true);
        expect(checkPattern([[1, 1], [2, 2], [1, 1], [1, 2]], 'ABAB')).toEqual(false);
        expect(checkPattern([[1, 2], [1, 2], [2, 2], [3, 2]], 'AAAA')).toEqual(false);
        expect(checkPattern([[8], [9], [9], [8]], 'ABBB')).toEqual(false);
        expect(checkPattern([[8], [7], [6], [5]], 'ABCC')).toEqual(false);
        expect(checkPattern([[8, 8, 8, 8], [7, 7, 7, 7], [6, 6, 6, 6], [5, 5, 5, 5]], 'DDBA')).toEqual(false);
        expect(checkPattern([[1, 2], [1, 2], [1, 2], [1, 2]], 'AABA')).toEqual(false);
    });
});
