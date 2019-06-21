const decomposeAddress = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(decomposeAddress('3315 Vanity St Beverly Hills, CA 90210')).toEqual(['3315', 'Vanity St', 'Beverly Hills', 'CA', '90210']);
        expect(decomposeAddress('557 Farmer Rd Corner, MT 59105')).toEqual(['557', 'Farmer Rd', 'Corner', 'MT', '59105']);
        expect(decomposeAddress('8919 Scarecrow Ct Idaho Falls, ID 80193')).toEqual(['8919', 'Scarecrow Ct', 'Idaho Falls', 'ID', '80193']);
        expect(decomposeAddress('91 Ronald Dr Stenton, MS 39073')).toEqual(['91', 'Ronald Dr', 'Stenton', 'MS', '39073']);
        expect(decomposeAddress('25000 Meek Pl Bozerman, MT 59104')).toEqual(['25000', 'Meek Pl', 'Bozerman', 'MT', '59104']);
    });
});
