const isParselTongue = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isParselTongue('Sshe ssselects to eat that apple.')).toEqual(true);
        expect(isParselTongue('She ssselects to eat that apple.')).toEqual(false);
        expect(isParselTongue('You ssseldom sssspeak sso boldly, ssso messmerizingly.')).toEqual(true);
        expect(isParselTongue('Steve likes to eat pancakes')).toEqual(false);
        expect(isParselTongue('Sssteve likess to eat pancakess')).toEqual(true);
        expect(isParselTongue('Beatrice samples lemonade')).toEqual(false);
        expect(isParselTongue('Beatrice enjoysss lemonade')).toEqual(true);
    });
});
