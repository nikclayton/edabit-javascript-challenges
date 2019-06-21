const matchLastItem = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(matchLastItem(['rsq', '6hi', 'g', 'rsq6hig'])).toEqual(true);
        expect(matchLastItem([0, 1, 2, 3, 4, 5, '12345'])).toEqual(false);
        expect(matchLastItem(['for', 'mi', 'da', 'bel', 'formidable'])).toEqual(false);
        expect(matchLastItem([8, 'thunder', true, '8thundertrue'])).toEqual(true);
        expect(matchLastItem([1, 1, 1, '11'])).toEqual(false);
        expect(matchLastItem(['tocto', 'G8G', 'xtohkgc', '3V8', 'ctyghrs', 100.88, 'fyuo', 'Q', 'toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ'])).toEqual(true);
    });
});
