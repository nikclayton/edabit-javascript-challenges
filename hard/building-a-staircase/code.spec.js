const buildStaircase = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(buildStaircase(0, '#')).toEqual([]);
        expect(buildStaircase(1, '#')).toEqual([['#']]);
        expect(buildStaircase(2, '#')).toEqual([['#', '_'], ['#', '#']]);
        expect(buildStaircase(3, '#')).toEqual([['#', '_', '_'], ['#', '#', '_'], ['#', '#', '#']]);
        expect(buildStaircase(4, '#')).toEqual([['#', '_', '_', '_'], ['#', '#', '_', '_'], ['#', '#', '#', '_'], ['#', '#', '#', '#']]);
        expect(buildStaircase(3, 'A')).toEqual([['A', '_', '_'], ['A', 'A', '_'], ['A', 'A', 'A']]);
        expect(buildStaircase(4, 'A')).toEqual([['A', '_', '_', '_'], ['A', 'A', '_', '_'], ['A', 'A', 'A', '_'], ['A', 'A', 'A', 'A']]);
        expect(buildStaircase(4, '$')).toEqual([['$', '_', '_', '_'], ['$', '$', '_', '_'], ['$', '$', '$', '_'], ['$', '$', '$', '$']]);
    });
});
