const whoWon = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(whoWon([['X', 'O', 'B'], ['B', 'X', 'O'], ['B', 'B', 'X']])).toEqual('X');
        expect(whoWon([['X', 'O', 'X'], ['O', 'X', 'B'], ['X', 'B', 'O']])).toEqual('X');
        expect(whoWon([['X', 'X', 'O'], ['O', 'O', 'X'], ['X', 'X', 'O']])).toEqual('Tie');
        expect(whoWon([['X', 'X', 'B'], ['O', 'X', 'X'], ['O', 'O', 'O']])).toEqual('O');
        expect(whoWon([['X', 'X', 'B'], ['O', 'X', 'X'], ['O', 'O', 'O']])).toEqual('O');
        expect(whoWon([['O', 'X', 'X'], ['B', 'O', 'B'], ['X', 'B', 'O']])).toEqual('O');
        expect(whoWon([['X', 'O', 'X'], ['O', 'O', 'X'], ['X', 'X', 'O']])).toEqual('Tie');
    });
});
