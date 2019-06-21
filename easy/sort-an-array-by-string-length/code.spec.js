const sortByLength = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sortByLength(['Google', 'Apple', 'Microsoft'])).toEqual(['Apple', 'Google', 'Microsoft']);
        expect(sortByLength(['Leonardo', 'Michelangelo', 'Raphael', 'Donatello'])).toEqual(['Raphael', 'Leonardo', 'Donatello', 'Michelangelo']);
        expect(sortByLength(['Turing', 'Einstein', 'Jung'])).toEqual(['Jung', 'Turing', 'Einstein']);
        expect(sortByLength(['Tatooine', 'Hoth', 'Yavin', 'Dantooine'])).toEqual(['Hoth', 'Yavin', 'Tatooine', 'Dantooine']);
        expect(sortByLength(['Mario', 'Bowser', 'Link'])).toEqual(['Link', 'Mario', 'Bowser']);
    });
});
