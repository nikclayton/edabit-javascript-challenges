const majorityVote = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(majorityVote(['A', 'B', 'B', 'B', 'A', 'A'])).toEqual(undefined);
        expect(majorityVote(['B', 'B', 'B'])).toEqual('B');
        expect(majorityVote(['A', 'B', 'B'])).toEqual('B');
        expect(majorityVote(['A', 'A', 'B'])).toEqual('A');
        expect(majorityVote(['A', 'A', 'A', 'B', 'C', 'A'])).toEqual('A');
        expect(majorityVote(['B', 'A', 'B', 'B', 'C', 'A', 'B', 'B'])).toEqual('B');
        expect(majorityVote(['A', 'B', 'B', 'A', 'C', 'C'])).toEqual(undefined);
        expect(majorityVote(['A', 'B'])).toEqual(undefined);
        expect(majorityVote(['A'])).toEqual('A');
        expect(majorityVote([])).toEqual(undefined);
    });
});
