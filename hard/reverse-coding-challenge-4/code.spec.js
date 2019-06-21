const mysteryFunc = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(mysteryFunc('hello')).toEqual([4, 1, 3, 3, 1]);
        expect(mysteryFunc('maybe')).toEqual([4, 2, 1, 3, 1]);
        expect(mysteryFunc('hopeless')).toEqual([0, 7, 0, 5, 4, 5, 3, 3]);
        expect(mysteryFunc('higher')).toEqual([2, 3, 1, 2, 5, 0]);
        expect(mysteryFunc('movement')).toEqual([5, 7, 6, 5, 5, 5, 6, 4]);
    });
});
