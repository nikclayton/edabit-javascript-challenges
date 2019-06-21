const tallestSkyscraper = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(tallestSkyscraper([[0, 0, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [1, 1, 1, 1]])).toEqual(3);
        expect(tallestSkyscraper([[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [1, 1, 1, 1]])).toEqual(4);
        expect(tallestSkyscraper([[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 0], [1, 1, 1, 1]])).toEqual(2);
        expect(tallestSkyscraper([[0, 0, 0, 1], [0, 0, 0, 1], [1, 1, 1, 1], [1, 1, 1, 1]])).toEqual(4);
        expect(tallestSkyscraper([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1]])).toEqual(2);
        expect(tallestSkyscraper([[0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1]])).toEqual(5);
    });
});
