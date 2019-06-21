const transformUpvotes = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(transformUpvotes('20.3k 3.8k 7.7k 992')).toEqual([20300, 3800, 7700, 992]);
        expect(transformUpvotes('5.5k 8.9k 32')).toEqual([5500, 8900, 32]);
        expect(transformUpvotes('6.8k 13.5k')).toEqual([6800, 13500]);
    });
});
