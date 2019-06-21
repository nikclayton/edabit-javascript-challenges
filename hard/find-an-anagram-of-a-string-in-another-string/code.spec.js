const ana_str_str = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(ana_str_str('car', 'race')).toEqual(true);
        expect(ana_str_str('nod', 'done')).toEqual(true);
        expect(ana_str_str('bag', 'grab')).toEqual(false);
    });
});
