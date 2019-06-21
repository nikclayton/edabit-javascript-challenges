const maximumScore = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5}, {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}])).toEqual(28);
        expect(maximumScore([{tile: 'B', score: 2}, {tile: 'V', score: 4}, {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}])).toEqual(15);
        expect(maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10}, {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])).toEqual(18);
        expect(maximumScore([{tile: 'A', score: 1}, {tile: 'E', score: 1}, {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}])).toEqual(7);
    });
});
