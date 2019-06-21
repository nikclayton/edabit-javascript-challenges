const commentsCorrect = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(commentsCorrect('//////')).toEqual(true);
        expect(commentsCorrect('/**//**////**/')).toEqual(true);
        expect(commentsCorrect('/**//**//**//**/')).toEqual(true);
        expect(commentsCorrect('///**///')).toEqual(true);
        expect(commentsCorrect('/**//////**//**////**/////')).toEqual(true);
        expect(commentsCorrect('//')).toEqual(true);
        expect(commentsCorrect('/**/')).toEqual(true);
        expect(commentsCorrect('///*/**/')).toEqual(false);
        expect(commentsCorrect('//*/**/')).toEqual(false);
        expect(commentsCorrect('/////')).toEqual(false);
        expect(commentsCorrect('///')).toEqual(false);
        expect(commentsCorrect('/**///**/')).toEqual(false);
        expect(commentsCorrect('/**/////**/')).toEqual(false);
    });
});
