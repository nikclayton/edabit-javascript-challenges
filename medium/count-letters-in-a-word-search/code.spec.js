const letterCounter = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(letterCounter([['D', 'E', 'Y', 'H', 'A', 'D'], ['C', 'B', 'Z', 'Y', 'J', 'K'], ['D', 'B', 'C', 'A', 'M', 'N'], ['F', 'G', 'G', 'R', 'S', 'R'], ['V', 'X', 'H', 'A', 'S', 'S']], 'D')).toEqual(3);
        expect(letterCounter([['D', 'E', 'Y', 'H', 'A', 'D'], ['C', 'B', 'Z', 'Y', 'J', 'K'], ['D', 'B', 'C', 'A', 'M', 'N'], ['F', 'G', 'G', 'R', 'S', 'R'], ['V', 'X', 'H', 'A', 'S', 'S']], 'H')).toEqual(2);
        expect(letterCounter([['D', 'E', 'Y', 'H', 'A', 'D'], ['C', 'B', 'Z', 'Y', 'J', 'K'], ['D', 'B', 'C', 'A', 'M', 'N'], ['F', 'G', 'G', 'R', 'S', 'R'], ['V', 'X', 'H', 'A', 'S', 'S']], 'Z')).toEqual(1);
        expect(letterCounter([['D', 'E', 'Y', 'H', 'A', 'D'], ['C', 'B', 'Z', 'Y', 'J', 'K'], ['D', 'B', 'C', 'A', 'M', 'N'], ['F', 'G', 'G', 'R', 'S', 'R'], ['V', 'X', 'H', 'A', 'S', 'S']], 'R')).toEqual(2);
        expect(letterCounter([['D', 'E', 'Y', 'H', 'A', 'D'], ['C', 'B', 'Z', 'Y', 'J', 'K'], ['D', 'B', 'C', 'A', 'M', 'N'], ['F', 'G', 'G', 'R', 'S', 'R'], ['V', 'X', 'H', 'A', 'S', 'S']], 'X')).toEqual(1);
        expect(letterCounter([['D', 'E', 'Y', 'H', 'A', 'D'], ['C', 'B', 'Z', 'Y', 'J', 'K'], ['D', 'B', 'C', 'A', 'M', 'N'], ['F', 'G', 'G', 'R', 'S', 'R'], ['V', 'X', 'H', 'A', 'S', 'S']], 'S')).toEqual(3);
    });
});
