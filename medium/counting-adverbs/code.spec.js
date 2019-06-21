const countAdverbs = require('./code');

describe('Tests', () => {
    test('-ly should not be counted if it is not at the end.', () => {
        expect(countAdverbs('She forgot where to buy the lysol.')).toEqual(0);
    });

test('-ly should not be counted if it is not at the end.', () => {
        expect(countAdverbs('Ilya ran to the store.')).toEqual(0);
    });
    
    test('the tests', () => {
        expect(countAdverbs('She ran hurriedly towards the stadium.')).toEqual(1);
        expect(countAdverbs('She ate the lasagna heartily and noisily.')).toEqual(2);
        expect(countAdverbs('He hates potatoes.')).toEqual(0);
        expect(countAdverbs('He was happily, crazily, foolishly over the moon.')).toEqual(3);
        expect(countAdverbs('She writes poetry beautifully.')).toEqual(1);
        expect(countAdverbs('There are many fat geese in the park.')).toEqual(0);
        expect(countAdverbs('The horse acted aggressively and stubbornly.')).toEqual(2);
    });
});
