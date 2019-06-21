const sexagenary = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(sexagenary(1971)).toEqual('Metal Pig');
        expect(sexagenary(1927)).toEqual('Fire Rabbit');
        expect(sexagenary(2017)).toEqual('Fire Rooster');
        expect(sexagenary(2000)).toEqual('Metal Dragon');
        expect(sexagenary(1958)).toEqual('Earth Dog');
        expect(sexagenary(1942)).toEqual('Water Horse');
        expect(sexagenary(1974)).toEqual('Wood Tiger');
    });
});
