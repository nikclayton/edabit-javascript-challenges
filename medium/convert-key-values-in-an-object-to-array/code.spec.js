const objectToArray = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(objectToArray({D: 1, B: 2, C: 3})).toEqual([['D', 1], ['B', 2], ['C', 3]]);
        expect(objectToArray({likes: 2, dislikes: 3, followers: 10})).toEqual([['likes', 2], ['dislikes', 3], ['followers', 10]]);
    });
});
