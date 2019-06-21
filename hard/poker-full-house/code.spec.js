const isFullHouse = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(isFullHouse(['A', 'A', 'A', 'K', 'K'])).toEqual(true);
        expect(isFullHouse(['3', 'J', 'J', '3', '3'])).toEqual(true);
        expect(isFullHouse(['10', 'J', '10', 'J', '10'])).toEqual(true);
        expect(isFullHouse(['10', 'J', '10', '10', '10'])).toEqual(false);
        expect(isFullHouse(['10', 'J', 'J', '2', '2'])).toEqual(false);
        expect(isFullHouse(['7', 'J', '3', '4', '2'])).toEqual(false);
    });
});
