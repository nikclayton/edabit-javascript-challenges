const getFrequencies = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getFrequencies(['A', 'A'])).toEqual({A: 2});
        expect(getFrequencies(['A', 'B', 'A', 'A', 'A'])).toEqual({A: 4, B: 1});
        expect(getFrequencies(['A', 'B', 'C', 'A', 'A'])).toEqual({A: 3, B: 1, C: 1});
        expect(getFrequencies([true, false, true, false, false])).toEqual({'true': 2, 'false': 3});
        expect(getFrequencies([1, 2, 3, 3, 2])).toEqual({'1': 1, '2': 2, '3': 2});
        expect(getFrequencies([])).toEqual({});
    });
});
