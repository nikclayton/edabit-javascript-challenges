const century = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(century(1756)).toEqual('18th century');
        expect(century(1555)).toEqual('16th century');
        expect(century(1000)).toEqual('10th century');
        expect(century(1001)).toEqual('11th century');
        expect(century(2005)).toEqual('21st century');
        expect(century(1789)).toEqual('18th century');
        expect(century(1510)).toEqual('16th century');
        expect(century(1615)).toEqual('17th century');
        expect(century(2000)).toEqual('20th century');
        expect(century(1997)).toEqual('20th century');
    });
});
