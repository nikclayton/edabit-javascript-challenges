const kToK = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(kToK(4, 2)).toEqual(true);
        expect(kToK(387420489, 9)).toEqual(true);
        expect(kToK(302875106592253, 13)).toEqual(true);
        expect(kToK(3124, 5)).toEqual(false);
        expect(kToK(17, 3)).toEqual(false);
        expect(kToK(823544, 7)).toEqual(false);
    });
});
