const hackerSpeak = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(hackerSpeak('javascript is cool')).toEqual('j4v45cr1pt 15 c00l');
        expect(hackerSpeak('become a coder')).toEqual('b3c0m3 4 c0d3r');
        expect(hackerSpeak('hi there')).toEqual('h1 th3r3');
        expect(hackerSpeak('programming is fun')).toEqual('pr0gr4mm1ng 15 fun');
        expect(hackerSpeak('keep on practicing')).toEqual('k33p 0n pr4ct1c1ng');
    });
});
