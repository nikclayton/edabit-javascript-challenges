const ascending = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(ascending('232425')).toEqual(true);
        expect(ascending('444445')).toEqual(true);
        expect(ascending('1234567')).toEqual(true);
        expect(ascending('123412351236')).toEqual(true);
        expect(ascending('57585960616263')).toEqual(true);
        expect(ascending('500001500002500003')).toEqual(true);
        expect(ascending('919920921')).toEqual(true);
        expect(ascending('2324256')).toEqual(false);
        expect(ascending('1235')).toEqual(false);
        expect(ascending('121316')).toEqual(false);
        expect(ascending('12131213')).toEqual(false);
        expect(ascending('54321')).toEqual(false);
        expect(ascending('56555453')).toEqual(false);
        expect(ascending('90090190290')).toEqual(false);
        expect(ascending('35236237238')).toEqual(false);
    });
});
