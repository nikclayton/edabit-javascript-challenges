const waterjug = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(waterjug([3, 5, 8], [0, 3, 5])).toEqual(2);
        expect(waterjug([1, 3, 4], [0, 2, 2])).toEqual(3);
        expect(waterjug([8, 17, 20], [0, 10, 10])).toEqual(9);
        expect(waterjug([4, 17, 22], [2, 5, 15])).toEqual('No solution.');
        expect(waterjug([3, 5, 8], [0, 5, 3])).toEqual(1);
        expect(waterjug([3, 5, 8], [0, 6, 2])).toEqual('No solution.');
        expect(waterjug([6, 7, 10], [0, 0, 10])).toEqual(0);
        expect(waterjug([3, 5, 8], [4, 0, 4])).toEqual('No solution.');
        expect(waterjug([3, 5, 8], [2, 1, 4])).toEqual('No solution.');
        expect(waterjug([3, 5, 8], [0, 2, 6])).toEqual(3);
        expect(waterjug([6, 7, 10], [5, 5, 0])).toEqual('No solution.');
        expect(waterjug([30, 45, 50], [25, 25, 0])).toEqual('No solution.');
        expect(waterjug([3, 5, 8], [0, 4, 4])).toEqual(7);
        expect(waterjug([4, 7, 10], [0, 5, 5])).toEqual(8);
    });
});
