const removeNull = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(removeNull(['a', undefined, 'b', undefined])).toEqual(['a', 'b']);
        expect(removeNull([undefined, undefined, undefined, undefined, undefined])).toEqual([]);
        expect(removeNull([7, 8, undefined, 9])).toEqual([7, 8, 9]);
        expect(removeNull([7, undefined, 8, undefined, 9])).toEqual([7, 8, 9]);
    });
});
