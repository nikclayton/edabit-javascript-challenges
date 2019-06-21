const stringCode = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(stringCode('I\'d like to drink my first glass of champagne.')).toEqual(['1 2 1 4 2 4 4 1 6', '1 2 1 1 0 1 1 1 3']);
        expect(stringCode('The first man to walk on the moon was Neil Armstrong.')).toEqual(['2 4 2 1 3 1 2 2 2 2 7', '1 1 1 1 1 1 1 2 1 2 2']);
        expect(stringCode('I\'ve got a lovely bunch of coconuts.')).toEqual(['1 2 0 4 4 1 5', '2 1 1 2 1 1 3']);
        expect(stringCode('There they are a\'standing in a row.')).toEqual(['3 3 1 6 1 0 2', '2 1 2 3 1 1 1']);
        expect(stringCode('Let them eat cake.')).toEqual(['2 3 1 2', '1 1 2 2']);
        expect(stringCode('It does not matter how slowly you go as long as you do not stop.')).toEqual(['1 2 2 4 2 5 1 1 1 3 1 1 1 2 3', '1 2 1 2 1 1 2 1 1 1 1 2 1 1 1']);
        expect(stringCode('To be or not to be, that is the question.')).toEqual(['1 1 1 2 1 1 3 1 2 4', '1 1 1 1 1 1 1 1 1 4']);
        expect(stringCode('Believe you can and you\'re halfway there.')).toEqual(['3 1 2 2 2 5 3', '4 2 1 1 3 2 2']);
    });
});
