const doesRhyme = require('./code');

describe('Tests', () => {
    test('Should work with punctuation.', () => {
        expect(doesRhyme('Sam I am!', 'Green eggs and ham.')).toEqual(true);
    });

test('Should work with uppercase/punctuation.', () => {
        expect(doesRhyme('Sam I am!', 'Green eggs and HAM.')).toEqual(true);
    });

test('Should work with punctuation.', () => {
        expect(doesRhyme('your elbow and chin!', 'how much can you win?')).toEqual(true);
    });

test('Should work with upper case letters.', () => {
        expect(doesRhyme('you will start to race', 'the waiting Place')).toEqual(true);
    });

test('Should work with punctuation.', () => {
        expect(doesRhyme('All that waiting and staying.', 'where the band are playing.')).toEqual(true);
    });
    
    test('the tests', () => {
        expect(doesRhyme('head straight to town', 'give me not a frown')).toEqual(true);
        expect(doesRhyme('with an unpleasant bump', 'in a slump')).toEqual(true);
        expect(doesRhyme('You are off to the races', 'a splendid day.')).toEqual(false);
        expect(doesRhyme('and frequently do?', 'you gotta move.')).toEqual(false);
        expect(doesRhyme('down by the bay', 'where the watermelons grow')).toEqual(false);
        expect(doesRhyme('back to my home', 'i dare not go')).toEqual(false);
    });
});
