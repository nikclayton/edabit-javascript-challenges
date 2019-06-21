const unique = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(unique([3, 3, 3, 7, 3, 3])).toEqual(7);
        expect(unique([0, 0, 0.77, 0, 0])).toEqual(0.77);
        expect(unique([0, 1, 1, 1, 1, 1, 1, 1])).toEqual(0);
        expect(unique([-4, -4, -4, 4])).toEqual(4);
        expect(unique([8, 8, 8, 8, 8, 8, 8, 0.5])).toEqual(0.5);
        expect(unique([2, 1, 2, 2, 2, 2, 2, 2])).toEqual(1);
    });
});
