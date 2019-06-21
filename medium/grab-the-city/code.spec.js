const grabCity = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(grabCity('[Last Day!] Beer Festival [Munich]')).toEqual('Munich');
        expect(grabCity('Cheese Factory Tour [Portland]')).toEqual('Portland');
        expect(grabCity('[Duration: 7 hours] Tour of the Maritimes [Prince Edward Island]')).toEqual('Prince Edward Island');
        expect(grabCity('[5 Stars] Traditional Gondola Experience [Venice]')).toEqual('Venice');
        expect(grabCity('[Last Minute Deal][$1039] Machu Picchu 3 Day Trip [Machu Picchu]')).toEqual('Machu Picchu');
        expect(grabCity('[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]')).toEqual('Kyoto');
    });
});
