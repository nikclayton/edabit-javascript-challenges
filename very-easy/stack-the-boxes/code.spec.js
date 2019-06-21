const stackBoxes = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(stackBoxes(1)).toEqual(1);
        expect(stackBoxes(2)).toEqual(4);
        expect(stackBoxes(0)).toEqual(0);
        expect(stackBoxes(5)).toEqual(25);
        expect(stackBoxes(27)).toEqual(729);
        expect(stackBoxes(196)).toEqual(38416);
        expect(stackBoxes(512)).toEqual(262144);
    });
});
