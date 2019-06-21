const Magic = require('./code');

describe('Tests', () => {
    test('magic date', () => {
        expect(Magic('1 1 2011')).toEqual(true);
    });

test('is not a magic date', () => {
        expect(Magic('4 1 2001')).toEqual(false);
    });

test('magic date', () => {
        expect(Magic('2 4 2008')).toEqual(true);
    });

test('magic date', () => {
        expect(Magic('3 3 2009')).toEqual(true);
    });

test('magic date', () => {
        expect(Magic('5 2 2010')).toEqual(true);
    });

test('is not a magic date', () => {
        expect(Magic('1 2 2011')).toEqual(false);
    });

test('is not a magic date', () => {
        expect(Magic('9 2 2011')).toEqual(false);
    });

test('is not a magic date', () => {
        expect(Magic('1 4 2011')).toEqual(false);
    });
});
