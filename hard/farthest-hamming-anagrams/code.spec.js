const maxHam = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(maxHam('dare', 'read')).toEqual(true);
        expect(maxHam('dear', 'read')).toEqual(2);
        expect(maxHam('naive', 'ravine')).toEqual(false);
        expect(maxHam('observe', 'verbose')).toEqual(6);
        expect(maxHam('mister', 'remits')).toEqual(true);
        expect(maxHam('pirates', 'traipse')).toEqual(true);
        expect(maxHam('petal', 'leapt')).toEqual(4);
        expect(maxHam('solemn', 'molest')).toEqual(false);
        expect(maxHam('solemn', 'melons')).toEqual(5);
        expect(maxHam('solemn', 'lemons')).toEqual(true);
        expect(maxHam('emigrants', 'streaming')).toEqual(true);
        expect(maxHam('teardrop', 'predated')).toEqual(false);
    });
});
