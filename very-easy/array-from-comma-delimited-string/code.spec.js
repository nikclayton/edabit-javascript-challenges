const toArray = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(toArray('watermelon, raspberry, orange')).toEqual(['watermelon', 'raspberry', 'orange']);
        expect(toArray('x1, x2, x3, x4, x5')).toEqual(['x1', 'x2', 'x3', 'x4', 'x5']);
        expect(toArray('a, b, c, d')).toEqual(['a', 'b', 'c', 'd']);
        expect(toArray('')).toEqual([]);
    });
});
