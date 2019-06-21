const nextEdge = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(nextEdge(5, 4)).toEqual(8);
        expect(nextEdge(8, 3)).toEqual(10);
        expect(nextEdge(7, 9)).toEqual(15);
        expect(nextEdge(10, 4)).toEqual(13);
        expect(nextEdge(7, 2)).toEqual(8);
    });
});
