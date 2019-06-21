const numOfSubbarrays = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]])).toEqual(3);
        expect(numOfSubbarrays([[1, 2, 3]])).toEqual(1);
        expect(numOfSubbarrays([1, 2, 3])).toEqual(0);
        expect(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]])).toEqual(4);
    });
});
