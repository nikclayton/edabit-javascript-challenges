const truncate = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(truncate('CatDogDuck', 9, 'Rat')).toEqual('CatDogRat');
        expect(truncate('DogCat', 3)).toEqual('Dog');
    });
});
