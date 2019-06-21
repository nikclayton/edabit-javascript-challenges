const pigLatin = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(pigLatin('Cats are great pets.')).toEqual('Atscay areway reatgay etspay.');
        expect(pigLatin('Tom got a small piece of pie.')).toEqual('Omtay otgay away mallsay iecepay ofway iepay.');
        expect(pigLatin('He told us a very exciting tale.')).toEqual('Ehay oldtay usway away eryvay excitingway aletay.');
        expect(pigLatin('A diamond is not enough.')).toEqual('Away iamondday isway otnay enoughway.');
        expect(pigLatin('Hurry!')).toEqual('Urryhay!');
    });
});
