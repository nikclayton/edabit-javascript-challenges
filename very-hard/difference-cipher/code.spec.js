const difCiph = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(difCiph('How are you?')).toEqual([72, 39, 8, -87, 65, 17, -13, -69, 89, -10, 6, -54]);
        expect(difCiph('?')).toEqual([63]);
        expect(difCiph([84, 20, -3, -69, 78, -9, 4, -2, 1, -6, 13, 6, -3, 1, -83, 65, 17, -13, -69, 83, 1, -2, -17, 13, -7, -2, -55, 0])).toEqual('The neighbours are strange..');
        expect(difCiph('It\'s a secret!')).toEqual([73, 43, -77, 76, -83, 65, -65, 83, -14, -2, 15, -13, 15, -83]);
        expect(difCiph([79, -4])).toEqual('OK');
        expect(difCiph([84, 27, -2, 2, 3, 0, -3, 8, -75, -12, 19, -19, 80, -3, -77, 73, 5, -78, 84, -12, -3, -69, 71, -6, 17, -14, 1, 9, -64])).toEqual('Tomorrow, 3 pm in the garden.');
        expect(difCiph(difCiph('Double test!'))).toEqual('Double test!');
        expect(difCiph('Sunshine')).toEqual([83, 34, -7, 5, -11, 1, 5, -9]);
    });
});
