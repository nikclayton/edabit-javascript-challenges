const validateSwaps = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(validateSwaps(['BACDE', 'EBCDA', 'BCDEA', 'ACBED'], 'ABCDE')).toEqual([true, true, false, false]);
        expect(validateSwaps(['32145', '12354', '15342', '12543'], '12345')).toEqual([true, true, true, true]);
        expect(validateSwaps(['9786', '9788', '97865', '7689'], '9768')).toEqual([true, false, false, false]);
        expect(validateSwaps(['123', '321', '132', '13', '12'], '213')).toEqual([true, false, false, false, false]);
        expect(validateSwaps(['123', '1234', '1235'], '12')).toEqual([false, false, false]);
        expect(validateSwaps(['123', '123', '123'], '133')).toEqual([false, false, false]);
        expect(validateSwaps(['132', '321', '213'], '123')).toEqual([true, true, true]);
    });
});
