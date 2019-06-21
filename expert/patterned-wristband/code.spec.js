const isWristband = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isWristband([['A', 'A'], ['B', 'B'], ['C', 'C']])).toEqual(true);
        expect(isWristband([['A', 'B'], ['A', 'B'], ['A', 'B']])).toEqual(true);
        expect(isWristband([['A', 'B', 'C'], ['C', 'A', 'B'], ['B', 'C', 'A'], ['A', 'B', 'C']])).toEqual(true);
        expect(isWristband([['A', 'B', 'C'], ['C', 'A', 'B'], ['D', 'C', 'A'], ['E', 'D', 'C']])).toEqual(true);
        expect(isWristband([['A', 'B', 'C'], ['B', 'A', 'B'], ['D', 'C', 'A'], ['E', 'D', 'C']])).toEqual(false);
        expect(isWristband([['A', 'B', 'C'], ['B', 'C', 'A'], ['C', 'A', 'B'], ['A', 'B', 'A']])).toEqual(true);
        expect(isWristband([['A', 'B', 'C'], ['B', 'C', 'D'], ['C', 'D', 'E'], ['D', 'E', 'F']])).toEqual(true);
        expect(isWristband([['A', 'B', 'C'], ['B', 'C', 'D'], ['C', 'D', 'E'], ['D', 'E', 'E']])).toEqual(true);
        expect(isWristband([['A', 'B', 'C'], ['B', 'C', 'D'], ['C', 'D', 'E'], ['D', 'F', 'E']])).toEqual(false);
        expect(isWristband([['A', 'B', 'C'], ['B', 'D', 'A'], ['C', 'A', 'B'], ['A', 'B', 'A']])).toEqual(false);
        expect(isWristband([['A', 'B'], ['A', 'B'], ['A', 'C'], ['A', 'B']])).toEqual(false);
        expect(isWristband([['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'B']])).toEqual(false);
        expect(isWristband([['A', 'A'], ['B', 'B'], ['C', 'C'], ['C', 'C']])).toEqual(true);
    });
});
