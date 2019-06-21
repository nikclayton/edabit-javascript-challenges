const alliterationCorrect = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(alliterationCorrect('She swam to the shore.')).toEqual(true);
        expect(alliterationCorrect('Maybel manages money well.')).toEqual(false);
        expect(alliterationCorrect('He helps harness happiness.')).toEqual(true);
        expect(alliterationCorrect('There are many animals in the zoo.')).toEqual(false);
        expect(alliterationCorrect('Tanya took the tomatoes. Two times two is not twenty.')).toEqual(true);
        expect(alliterationCorrect('Two times two is four.')).toEqual(false);
        expect(alliterationCorrect('Nancy nimbly ran for the newts.')).toEqual(true);
    });
});
