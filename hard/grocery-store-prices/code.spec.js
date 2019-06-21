const getPrices = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(getPrices(['ice cream ($5.99)', 'banana ($0.20)', 'sandwich ($8.50)', 'soup ($1.99)'])).toEqual([5.99, 0.2, 8.5, 1.99]);
        expect(getPrices(['salad ($4.99)'])).toEqual([4.99]);
        expect(getPrices(['artichokes ($1.99)', 'rotiserrie chicken ($5.99)', 'gum ($0.75)'])).toEqual([1.99, 5.99, 0.75]);
        expect(getPrices(['pizza ($2.99)', 'shampoo ($15.75)', 'trash bags ($15.00)'])).toEqual([2.99, 15.75, 15]);
    });
});
