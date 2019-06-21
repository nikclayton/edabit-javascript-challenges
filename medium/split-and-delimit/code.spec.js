const splitAndDelimit = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(splitAndDelimit('bellow', 2, '&')).toEqual('be&ll&ow');
        expect(splitAndDelimit('magnify', 3, ':')).toEqual('mag:nif:y');
        expect(splitAndDelimit('poisonous', 2, '~')).toEqual('po~is~on~ou~s');
        expect(splitAndDelimit('shape-shifting', 5, '^')).toEqual('shape^-shif^ting');
        expect(splitAndDelimit('nebulous', 1, '#')).toEqual('n#e#b#u#l#o#u#s');
    });
});
