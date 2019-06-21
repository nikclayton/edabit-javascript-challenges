const decision = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(decision(['yellow 3', 'red 3'], 'red 10')).toEqual('Uno!');
        expect(decision(['blue 1'], 'blue 5')).toEqual('You won!');
        expect(decision(['red 1'], 'blue 5')).toEqual('Uno!');
        expect(decision(['red 1', 'blue 10'], 'blue 5')).toEqual('Uno!');
        expect(decision(['red 1', 'blue 10', 'green 7'], 'blue 5')).toEqual('Keep going...');
        expect(decision(['red 1', 'green 7'], 'green 2')).toEqual('Uno!');
        expect(decision(['green 7'], 'green 2')).toEqual('You won!');
        expect(decision(['blue 7'], 'green 7')).toEqual('You won!');
        expect(decision(['blue 1', 'green 2', 'yellow 4', 'red 2'], 'blue 5')).toEqual('Keep going...');
    });
});
