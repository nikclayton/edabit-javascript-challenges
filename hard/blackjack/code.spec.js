const overTwentyOne = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(overTwentyOne(['A', 2, 3])).toEqual(false);
        expect(overTwentyOne(['A', 'J', 'K'])).toEqual(false);
        expect(overTwentyOne(['A', 'J', 'K', 'Q'])).toEqual(true);
        expect(overTwentyOne([5, 3, 6, 6, 7, 9])).toEqual(true);
    });
});
