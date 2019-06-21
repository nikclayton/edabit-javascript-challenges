const findFrequent = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(findFrequent([3, 7, 3])).toEqual(3);
        expect(findFrequent([undefined, 'hello', true, undefined])).toEqual(undefined);
        expect(findFrequent([false, 'up', 'down', 'left', 'right', true, false])).toEqual(false);
        expect(findFrequent([undefined])).toEqual(undefined);
        expect(findFrequent([1, 2, -3, true, false, undefined, 'yes', 'yeah', 'yup', 2])).toEqual(2);
        expect(findFrequent(['Batman', 'Superman', 'Batman'])).toEqual('Batman');
    });
});
