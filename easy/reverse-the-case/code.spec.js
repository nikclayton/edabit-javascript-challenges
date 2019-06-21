const reverseCase = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(reverseCase('Happy Birthday')).toEqual('hAPPY bIRTHDAY');
        expect(reverseCase('MANY THANKS')).toEqual('many thanks');
        expect(reverseCase('sPoNtAnEoUs')).toEqual('SpOnTaNeOuS');
        expect(reverseCase('eXCELLENT, yOuR mAJESTY')).toEqual('Excellent, YoUr Majesty');
    });
});
