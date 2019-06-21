const deepCount = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(deepCount([1, 2, 3])).toEqual(3);
        expect(deepCount(['x', 'y', ['z']])).toEqual(4);
        expect(deepCount(['a', 'b', ['c', 'd', ['e']]])).toEqual(7);
        expect(deepCount([[1], [2], [3]])).toEqual(6);
        expect(deepCount([[[[[[[[[]]]]]]]]])).toEqual(8);
        expect(deepCount([undefined])).toEqual(1);
        expect(deepCount([[]])).toEqual(1);
        expect(deepCount([[undefined], [undefined, ['edabit']], [0]])).toEqual(8);
    });
});
