const possiblyPerfect = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(possiblyPerfect(['A', '_', 'C', '_', 'B'], ['A', 'D', 'C', 'E', 'B'])).toEqual(true);
        expect(possiblyPerfect(['B', '_', 'B'], ['B', 'D', 'C'])).toEqual(false);
        expect(possiblyPerfect(['T', '_', 'F', 'F', 'F'], ['F', 'F', 'T', 'T', 'T'])).toEqual(true);
        expect(possiblyPerfect(['B', 'A', '_', '_'], ['B', 'A', 'C', 'C'])).toEqual(true);
        expect(possiblyPerfect(['A', 'B', 'A', '_'], ['B', 'A', 'C', 'C'])).toEqual(true);
        expect(possiblyPerfect(['A', 'B', 'C', '_'], ['B', 'A', 'C', 'C'])).toEqual(false);
        expect(possiblyPerfect(['B', '_'], ['C', 'A'])).toEqual(true);
        expect(possiblyPerfect(['B', 'A'], ['C', 'A'])).toEqual(false);
        expect(possiblyPerfect(['B'], ['B'])).toEqual(true);
        expect(possiblyPerfect(['_', 'T', '_', '_'], ['T', 'F', 'F', 'F'])).toEqual(true);
        expect(possiblyPerfect(['_', 'T', '_', '_'], ['T', 'T', 'F', 'T'])).toEqual(true);
        expect(possiblyPerfect(['_', 'T', 'T', 'T'], ['T', 'T', 'F', 'T'])).toEqual(false);
        expect(possiblyPerfect(['_', 'T', 'T', 'T'], ['T', 'T', 'T', 'T'])).toEqual(true);
        expect(possiblyPerfect(['_', 'T', 'T', 'T'], ['F', 'F', 'F', 'F'])).toEqual(true);
    });
});
