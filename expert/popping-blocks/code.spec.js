const finalResult = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(finalResult(['B', 'B', 'A', 'C', 'A', 'A', 'C'])).toEqual(['A']);
        expect(finalResult(['B', 'B', 'C', 'C', 'A', 'A', 'A'])).toEqual([]);
        expect(finalResult(['C', 'A', 'C'])).toEqual(['C', 'A', 'C']);
        expect(finalResult(['C', 'A', 'A', 'C', 'B'])).toEqual(['B']);
        expect(finalResult(['C', 'C'])).toEqual([]);
        expect(finalResult(['A', 'B', 'C', 'C', 'B', 'D', 'A'])).toEqual(['A', 'D', 'A']);
        expect(finalResult(['A', 'B', 'A', 'A', 'A', 'B', 'B'])).toEqual(['A']);
    });
});
