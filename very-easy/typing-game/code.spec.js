const correctStream = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(correctStream(['it', 'is', 'find'], ['it', 'is', 'fine'])).toEqual([1, 1, -1]);
        expect(correctStream(['april', 'showrs', 'bring', 'may', 'flowers'], ['april', 'showers', 'bring', 'may', 'flowers'])).toEqual([1, -1, 1, 1, 1]);
        expect(correctStream(['weird', 'indicr', 'moment'], ['weird', 'indict', 'moment'])).toEqual([1, -1, 1]);
        expect(correctStream(['starry', 'wind', 'skies'], ['starry', 'wind', 'skies'])).toEqual([1, 1, 1]);
    });
});
