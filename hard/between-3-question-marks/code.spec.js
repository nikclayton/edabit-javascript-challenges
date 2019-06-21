const questionMarks = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(questionMarks('')).toEqual(false);
        expect(questionMarks('???')).toEqual(false);
        expect(questionMarks('0???9')).toEqual(false);
        expect(questionMarks('1???9???10')).toEqual(false);
        expect(questionMarks('1???9???1')).toEqual(true);
        expect(questionMarks('1???9xx0???10')).toEqual(true);
        expect(questionMarks('0???10')).toEqual(true);
        expect(questionMarks('-1???11')).toEqual(true);
        expect(questionMarks('111???-101')).toEqual(true);
        expect(questionMarks('arrb6???4xxbl5???eee5')).toEqual(true);
    });
});
