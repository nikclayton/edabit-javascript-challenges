const tree = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(tree(1)).toEqual(['#']);
        expect(tree(2)).toEqual([' # ', '###']);
        expect(tree(5)).toEqual(['    #    ', '   ###   ', '  #####  ', ' ####### ', '#########']);
        expect(tree(0)).toEqual([]);
    });
});
