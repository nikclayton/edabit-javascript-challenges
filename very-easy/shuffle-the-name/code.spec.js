const nameShuffle = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(nameShuffle('Donald Trump')).toEqual('Trump Donald');
        expect(nameShuffle('Rosie O\'Donnel')).toEqual('O\'Donnel Rosie');
        expect(nameShuffle('Seymour Butts')).toEqual('Butts Seymour');
        expect(nameShuffle('Ebony Greene')).toEqual('Greene Ebony');
        expect(nameShuffle('Ken Kennedy')).toEqual('Kennedy Ken');
        expect(nameShuffle('Allison Gonzalez')).toEqual('Gonzalez Allison');
        expect(nameShuffle('Albert Frazier')).toEqual('Frazier Albert');
        expect(nameShuffle('Eloise Hopkins')).toEqual('Hopkins Eloise');
        expect(nameShuffle('Donnie Welch')).toEqual('Welch Donnie');
        expect(nameShuffle('Vernon Thomas')).toEqual('Thomas Vernon');
    });
});
