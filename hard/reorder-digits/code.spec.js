const reorderDigits = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(reorderDigits([515, 341, 98, 44, 211], 'asc')).toEqual([155, 134, 89, 44, 112]);
        expect(reorderDigits([515, 341, 98, 44, 211], 'desc')).toEqual([551, 431, 98, 44, 211]);
        expect(reorderDigits([63251, 78221], 'asc')).toEqual([12356, 12278]);
        expect(reorderDigits([63251, 78221], 'desc')).toEqual([65321, 87221]);
        expect(reorderDigits([1, 2, 3, 4], 'asc')).toEqual([1, 2, 3, 4]);
        expect(reorderDigits([1, 2, 3, 4], 'desc')).toEqual([1, 2, 3, 4]);
        expect(reorderDigits([12, 21, 15, 51], 'asc')).toEqual([12, 12, 15, 15]);
        expect(reorderDigits([12, 21, 15, 51], 'desc')).toEqual([21, 21, 51, 51]);
    });
});
