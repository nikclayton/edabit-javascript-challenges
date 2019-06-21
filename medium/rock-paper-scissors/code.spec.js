const calculateScore = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(calculateScore([['R', 'P'], ['R', 'S'], ['S', 'P']])).toEqual('Abigail');
        expect(calculateScore([['R', 'R'], ['S', 'S']])).toEqual('Tie');
        expect(calculateScore([['S', 'R'], ['R', 'S'], ['R', 'R']])).toEqual('Tie');
        expect(calculateScore([['S', 'R'], ['P', 'R']])).toEqual('Tie');
        expect(calculateScore([['S', 'S'], ['S', 'P'], ['R', 'S'], ['S', 'R'], ['R', 'R']])).toEqual('Abigail');
        expect(calculateScore([['S', 'R'], ['S', 'R'], ['S', 'R'], ['R', 'S'], ['R', 'S']])).toEqual('Benson');
    });
});
